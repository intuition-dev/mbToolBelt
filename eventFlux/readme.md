
# My event bus is better than yours: EventFlux

- pub first or sub first!
- Can be used for Flux, or any other event system or design


Inspired by https://github.com/theiconic/event-bus, but as ES6+

Unit test included, use it as example, or:

    ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.6/eventFlux/defEventBus.min.js'
    new EventFlux() // makes the persistent windows instance **defEventBus**

    defEventBus.dispatch('evX', 'oh hi');
    defEventBus.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```


#### Aside

- https://facebook.github.io/flux/docs/in-depth-overview
