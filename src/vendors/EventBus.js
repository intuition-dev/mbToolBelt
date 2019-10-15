var EventBus = (function () {
    function EventBus() {
        this.topics = {};
        this.getTopic = function (identifier, options) {
            if (!this.topics[identifier]) {
                this.topics[identifier] = new Topic(identifier, options);
            }
            return this.topics[identifier];
        };
        this.getTopics = function () {
            return this.topics;
        };
    }
    return EventBus;
}());
var Topic = (function () {
    function Topic(identifier, options) {
        this.addListener = function (binding, callback) {
            var listener = new Listener(binding, callback, this);
            this.listeners[binding] = this.listeners[binding] || [];
            this.listeners[binding].push(listener);
            if (this.options.persistent === true) {
                this.consume(binding, this.queue, listener);
            }
            return listener;
        };
        this.removeListener = function (listener) {
            var i = 0, listeners = this.listeners[listener.event] || [];
            for (; i < listeners.length; i++) {
                if (listeners[i] === listener) {
                    this.listeners[listener.event].splice(i, 1);
                    return;
                }
            }
        };
        this.dispatch = function (event, data) {
            var Nlisteners = new Array();
            this.listeners.forEach(function (binding) {
                if (this.matchWildCard(event, binding)) {
                    Nlisteners = Nlisteners.concat(this.listeners[binding]);
                }
            });
            Nlisteners.forEach(function (ll) {
                try {
                    console.log(typeof ll.callback);
                    ll.callback(data);
                }
                catch (err) {
                    console.log(err);
                }
            });
            if (!Nlisteners.length && this.options.persistent === true) {
                this.queue[event] = this.queue[event] || [];
                this.queue[event].push(data);
            }
        };
        this.identifier = identifier;
        this.options = options || {};
        this.listeners = [];
        this.queue = {};
    }
    ;
    Topic.prototype.consume = function (binding, queue, listener) {
        for (var key in queue) {
            if (this.matchWildCard(key, binding)) {
                var messages = queue[key];
                for (var i in messages) {
                    listener.callback(messages[i]);
                }
                queue[key].splice(0, queue[key].length);
            }
        }
    };
    Topic.prototype.matchWildCard = function (str, rule) {
        return new RegExp('^' + rule.split('*').join('.*') + '$').test(str);
    };
    return Topic;
}());
var Listener = (function () {
    function Listener(event, callback, topic) {
        this.unbind = function () {
            this.topic.removeListener(this);
        };
        this.event = event;
        this.callback = callback;
        this.topic = topic;
    }
    ;
    return Listener;
}());
window['eventBus'] = new EventBus();
window['DeventBus'] = window['eventBus'].getTopic('DEFAULT', { 'persistent': true });
