
# My event bus is better than yours: EventFlux

- Pub first or sub first! For example Custom Events can't do that making it hard for programmer to use. EventFlux is more reliable than Custom Events.
- Should be used for Flux user actions, or any other event system


Inspired by https://github.com/arqex/fluxify and https://github.com/theiconic/event-bus
, but in ES6+.

# Flux

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.12/eventFlux/EventFlux.min.js'
    
    this.some_name = .getTopic('some_name', { 'persistent': true })

    some_name.doAction('CHANGE', 'newVal');
    // or better some_name.changeState('key1', 'someNewValue');
    some_name.register('CHANGE', function (data) {
        console.log('change', data);
    })
    ```

# Non-Flux

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.12/eventFlux/EventFlux.min.js'
    
    // makes a global instance **defEventFlux**:
    EventFlux.init()

    defEventFlux.dispatch('evX', 'oh hi');
    defEventFlux.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```

#### Aside

- https://facebook.github.io/flux/docs/in-depth-overview
