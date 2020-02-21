var EventBus = function () {
    this.topics = {};
};
EventBus.prototype.getTopic = function (identifier, options) {
    if (!this.topics[identifier]) {
        this.topics[identifier] = new Topic(identifier, options);
    }
    return this.topics[identifier];
};
EventBus.prototype.getTopics = function () {
    return this.topics;
};
var Topic = function (identifier, options) {
    this.identifier = identifier;
    this.options = options || {};
    this.listeners = {};
    this.queue = {};
};
Topic.prototype.addListener = function (binding, callback) {
    var listener = new Listener(binding, callback, this);
    this.listeners[binding] = this.listeners[binding] || [];
    this.listeners[binding].push(listener);
    if (this.options.persistent === true) {
        consume(binding, this.queue, listener);
    }
    return listener;
};
Topic.prototype.removeListener = function (listener) {
    var i = 0, listeners = this.listeners[listener.event] || [];
    for (; i < listeners.length; i++) {
        if (listeners[i] === listener) {
            this.listeners[listener.event].splice(i, 1);
            return;
        }
    }
};
Topic.prototype.dispatch = function (event, data) {
    var binding, listeners = [];
    for (binding in this.listeners) {
        if (matchWildCard(event, binding)) {
            listeners = listeners.concat(this.listeners[binding]);
        }
    }
    for (i in listeners) {
        if (listeners[i].callback)
            listeners[i].callback(data);
    }
    if (!listeners.length && this.options.persistent === true) {
        this.queue[event] = this.queue[event] || [];
        this.queue[event].push(data);
    }
};
function consume(binding, queue, listener) {
    for (var key in queue) {
        if (matchWildCard(key, binding)) {
            var messages = queue[key];
            for (var i in messages) {
                listener.callback(messages[i]);
            }
            queue[key].splice(0, queue[key].length);
        }
    }
}
function matchWildCard(str, rule) {
    return new RegExp('^' + rule.split('*').join('.*') + '$').test(str);
}
var Listener = function (event, callback, topic) {
    this.event = event;
    this.callback = callback;
    this.topic = topic;
};
Listener.prototype.unbind = function () {
    this.topic.removeListener(this);
};
if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = EventBus;
}
else {
    window.EventBus = EventBus;
}
window.eventBus = new EventBus();
window.DeventBus = eventBus.getTopic('DEFAULT', { 'persistent': true });
