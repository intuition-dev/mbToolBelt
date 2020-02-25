
# My event bus is better than yours: EventFlux

- pub first or sub first!
- Can be used for Flux, or anything else.

EventFlux.js

inspired by https://github.com/theiconic/event-bus, but as ES6+

Unit test included, use it as example, or:

    ```
    import { EventFlux } from './EventFlux.js';
    new EventFlux();

    DefEventBus.dispatch('evX', 'oh hi');
    DefEventBus.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```


#### Aside

- https://facebook.github.io/flux/docs/in-depth-overview
