import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.3/eventFlux/EventFlux.js'

// page receives messages from comp
new EventFlux()

defEventBus.addListener('c-custel-x', function(evt) {
    console.log('**pg received message**', evt)

    // optional, interact w/ element
    let c = document.getElementById('c1')
    c.setViewModel(null)

})