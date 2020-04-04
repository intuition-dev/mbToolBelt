export class EventFlux {
    constructor() {
        console.log('EventFlux cons');
        this.topics = {};
    }
    static init() {
        if (!window.defEventFlux)
            window.defEventFlux = new EventFlux().getTopic('DEFAULT', { 'persistent': true });
    }
    getTopic(identifier, options) {
        if (!this.topics[identifier]) {
            this.topics[identifier] = new Topic(identifier, options);
        }
        return this.topics[identifier];
    }
    getTopics() {
        return this.topics;
    }
}
class Topic {
    constructor(identifier, options) {
        this.listeners = {};
        this.queue = {};
        this.identifier = identifier;
        this.options = options || {};
    }
    register(binding, callback) {
        return this.addListener(binding, callback);
    }
    addListener(binding, callback) {
        var listener = new Listener(binding, callback, this);
        this.listeners[binding] = this.listeners[binding] || [];
        this.listeners[binding].push(listener);
        if (this.options.persistent === true) {
            this.consume(binding, this.queue, listener);
        }
        return listener;
    }
    removeListener(listener) {
        var i = 0, listeners = this.listeners[listener.event] || [];
        for (; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                this.listeners[listener.event].splice(i, 1);
                return;
            }
        }
    }
    getEvents() {
        var events = [];
        for (var i = 0; i < this.listeners.length; i++) {
            var event = this.listeners[i].event;
            events.push(event);
        }
        return events;
    }
    changeState(key, value) {
        let msg = {};
        msg[key] = value;
        return this.dispatch('CHANGE', msg);
    }
    doAction(event, data) {
        return this.dispatch(event, data);
    }
    dispatch(event, data) {
        var binding, listeners = [];
        for (binding in this.listeners) {
            if (this.matchWildCard(event, binding)) {
                listeners = listeners.concat(this.listeners[binding]);
            }
        }
        for (var i in listeners) {
            if (listeners[i].callback)
                listeners[i].callback(data);
        }
        if (!listeners.length && this.options.persistent === true) {
            this.queue[event] = this.queue[event] || [];
            this.queue[event].push(data);
        }
    }
    dispatchAsync(event, data) {
        const THIZ = this;
        setTimeout(function () {
            THIZ.dispatch(event, data);
        }, 1);
    }
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
}
class Listener {
    constructor(event, callback, topic) {
        this.event = event;
        this.callback = callback;
        this.topic = topic;
    }
    unbind() {
        this.topic.removeListener(this);
    }
}
