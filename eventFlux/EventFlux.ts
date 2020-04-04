
declare var window


/**
 * Flux / Event bus
 * also creates global defEventFlux var
 * 
 */
export class EventFlux {

    static init() {
    // added this:
        if(!window.defEventFlux)
        window.defEventFlux = new EventFlux().getTopic('DEFAULT', { 'persistent': true }); // default 
    }

    topics 
    constructor() {
        console.log('EventFlux cons')
        this.topics = {}
    }
    
    /**
     * Get a topic in the event bus, if it doesn't exist, it will be created
     * @param {string} identifier
     * @returns {Topic}
     */
    getTopic(identifier, options) {
        if (!this.topics[identifier]) {
            this.topics[identifier] = new Topic(identifier, options);
        }
        return this.topics[identifier];
    }
    
    /**
     * @returns {Topic[]}
     */
    getTopics() {
        return this.topics;
    }

} // class

class Topic {

    listeners:any = {};
    queue = {};
    identifier;
    options 

    /**
     * @param {string} identifier
     */
    constructor(identifier, options) {
        this.identifier = identifier;
        this.options = options || {};
    }
    
    /**
        Flux listen
    */
    register(binding, callback) {
        return this.addListener(binding, callback)
    }
    
    /**
     * @param {string} binding The event binding to listen to
     * @param {Function} callback The callback to be triggered on events
     * @returns {Listener} You *must* use this for removeListener, for example when testing
     */
    addListener(binding, callback) {
        var listener = new Listener(binding, callback, this);
        this.listeners[binding] = this.listeners[binding] || [];
        this.listeners[binding].push(listener);
        if (this.options.persistent === true) {
            this.consume(binding, this.queue, listener);
        }
        return listener;
    }

    /**
     * @param {Listener} listener The listener instance to remove
     */
    removeListener(listener) {
        var i = 0, listeners = this.listeners[listener.event] || [];
        for (; i < listeners.length; i++) {
            if (listeners[i] === listener) {
                this.listeners[listener.event].splice(i, 1);
                return;
            }
        }
    }//()


    getEvents() {
        var events = []
        for (var i = 0; i < this.listeners.length; i++) {
            var event = this.listeners[i].event
            events.push(event)
        }
        return events
    }//()

    /**
     * Flux 'CHANGE' action
     * @param {*} key 
     * @param {*} value 
     */
    changeState(key, value) {
        let  msg= {}
        msg[key] = value
        return this.dispatch('CHANGE', msg)
    }

    /**
     * Flux dispatch
     */
    doAction(event, data) {
        return this.dispatch(event, data)    
    }

    /**
     * @param {string} event The event to trigger
     * @param {any} data The data to broadcast to the listeners
     */
    dispatch(event, data) {
        var binding, listeners = [];
        for (binding in this.listeners) {
            if (this.matchWildCard(event, binding)) {
                listeners = listeners.concat(this.listeners[binding]);
            }
        }
        for (var i in listeners) { // Nat fix:
            if (listeners[i].callback)
                listeners[i].callback(data);
        }
        if (!listeners.length && this.options.persistent === true) {
            this.queue[event] = this.queue[event] || [];
            this.queue[event].push(data);
        }
    }//()

    // dispatch async
    dispatchAsync(event, data) {
        const THIZ = this
        setTimeout(function() { 
            THIZ.dispatch(event,data)
        }, 1) 
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
    }//()
}//class

class Listener {

    event
    callback
    topic

    /**
     * @param {string} event The event this listener is attached to
     * @param {Function} callback The actual callable that will be triggered on events
     * @param {Topic} topic A reference to the topic this listener is attached to
     */
    constructor(event, callback, topic) {
        this.event = event;
        this.callback = callback;
        this.topic = topic;
    }

    unbind() {
        this.topic.removeListener(this);
    }

} // class


