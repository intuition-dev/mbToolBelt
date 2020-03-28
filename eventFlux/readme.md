
# My event bus is better than yours: EventFlux

- pub first or sub first!
- Should be used for Flux user actions, or any other event system


Inspired by https://github.com/arqex/fluxify and https://github.com/theiconic/event-bus
, but in ES6+.

# Flux

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.2/eventFlux/defEventFlux.min.js'
    
    this.store_name = new EventFlux().getTopic('store_name', { 'persistent': true })

    store_name.doAction('CHANGE', 'newVal');
    // or better store_name.changeState('key1', 'someNewValue');
    store_name.register('CHANGE', function (data) {
        console.log('change', data);
    })
    ```
Also, the Custom Elements here use Flux!

# Non-Flux

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.2/eventFlux/defEventFlux.min.js'
    new EventFlux() // makes the persistent windows instance **defEventFlux**

    defEventFlux.dispatch('evX', 'oh hi');
    defEventFlux.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```

#### Aside

- https://facebook.github.io/flux/docs/in-depth-overview
