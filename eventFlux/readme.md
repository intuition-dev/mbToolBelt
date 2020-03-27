
# My event bus is better than yours: EventFlux

- pub first or sub first!
- Should be used for Flux user actions, or any other event system


Inspired by https://github.com/arqex/fluxify and https://github.com/theiconic/event-bus
, but in ES6+.

Unit test included, use it as example, or:

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/eventFlux/defEventFlux.min.js'
    new EventFlux() // makes the persistent windows instance **defEventFlux**

    defEventFlux.dispatch('evX', 'oh hi');
    defEventFlux.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```

# Flux

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/eventFlux/defEventFlux.min.js'
    new EventFlux() // makes the persistent windows instance **defEventFlux**

    defEventFlux.dispatch('evX', 'oh hi');
    defEventFlux.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```


#### Aside

- https://facebook.github.io/flux/docs/in-depth-overview
