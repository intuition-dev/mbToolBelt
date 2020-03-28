import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.2/eventFlux/EventFlux.js'
new EventFlux()// makes defEventFlux var

// page receives messages from comp
defEventFlux.addListener('c-custel-x', function(evt) {
    console.log('**pg received message**', evt)

    // optionaly, you can interact w/ element
    let c = document.getElementById('c1')
    c.setViewModel(null)
})