
// https://github.com/theiconic/event-bus

// added code at end

class EventBus  {
  topics = {}

/**
 * Get a topic in the event bus, if it doesn't exist, it will be created
 * @param {string} identifier 
 * @returns {Topic}
 */
getTopic = function (identifier, options) {
  if (!this.topics[identifier]) {
    this.topics[identifier] = new Topic(identifier, options);
  }
  return this.topics[identifier];
}

/**
 * @returns {Topic[]}
 */
getTopics = function () {
  return this.topics;
}

} //class

class Topic {
  identifier
  options
  listeners:Array<Listener>
  queue 
/**
 * @param {string} identifier 
 */
constructor(identifier, options) {
  this.identifier = identifier;
  this.options = options || {};
  this.listeners = []
  this.queue = {};
};

/**
 * @param {string} binding The event binding to listen to
 * @param {Function} callback The callback to be triggered on events
 * @returns {Listener}
 */
addListener = function (binding, callback:Function) {
  var listener = new Listener(binding, callback, this);

  this.listeners[binding] = this.listeners[binding] || [];
  this.listeners[binding].push(listener);

  if (this.options.persistent === true) {
    this.consume(binding, this.queue, listener);
  }

  return listener;
};

/**
 * @param {Listener} listener The listener instance to remove
 */
removeListener = function (listener) {
  var i = 0,
    listeners = this.listeners[listener.event] || [];

  for (; i < listeners.length; i++) {
    if (listeners[i] === listener) {
      this.listeners[listener.event].splice(i, 1);
      return;
    }
  }
}

/**
 * @param {string} event The event to trigger
 * @param {any} data The data to broadcast to the listeners
 */
dispatch = function (event, data) {
  let Nlisteners: Array<Listener> = new Array()

  this.listeners.forEach(function(binding) {
    if (this.matchWildCard(event, binding)) {
      Nlisteners = Nlisteners.concat(this.listeners[binding]);
    }
  })

  Nlisteners.forEach(function(ll) {
    try {
      console.log(typeof ll.callback) // Nat
      ll.callback(data) // Nat
    } catch(err) {
      console.log(err)
    }
  })//()

  if (!Nlisteners.length && this.options.persistent === true) {
    this.queue[event] = this.queue[event] || [];
    this.queue[event].push(data);
  }
}//()

consume(binding, queue, listener) {
  for (var key in queue) {
    if (this.matchWildCard(key, binding)) {
      var messages = queue[key];

      for (var i in messages) {
        listener.callback(messages[i]);
      }

      queue[key].splice(0, queue[key].length);
    }
  }
}

matchWildCard(str, rule) {
  return new RegExp('^' + rule.split('*').join('.*') + '$').test(str);
}
} // class

class Listener {

  event
  callback:Function
  topic

/**
 * @param {string} event The event this listener is attached to
 * @param {Function} callback The actual callable that will be triggered on events
 * @param {Topic} topic A reference to the topic this listener is attached to
 */
constructor(event, callback:Function, topic) {

  this.event = event;
  this.callback = callback;
  this.topic = topic;
};

unbind = function () {
  this.topic.removeListener(this);
};

} // class

// added this:
window['eventBus'] = new EventBus()
window['DeventBus'] = window['eventBus'].getTopic('DEFAULT',{'persistent': true}) // default event bus
