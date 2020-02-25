
# My event bus is better than yours: EventFlux

- pub first or sub first!
- Can be used for Flux, or anything else.

EventFlux.js

inspired by https://github.com/theiconic/event-bus

Unit test included, use that as example:

    ```
    import { EventFlux } from './EventFlux.js';
    new EventFlux();

    DefEventBus.dispatch('evX', 'oh hi');
    DefEventBus.addListener('evX', function (data) {
        console.log('evX', data);
    })
    ```

