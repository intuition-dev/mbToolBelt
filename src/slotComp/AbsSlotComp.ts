import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.2/eventFlux/EventFlux.js'

// . A slotable component(/module).
export class AbsSlotComp extends HTMLElement {
    sr // shadow root handle
    setup(template) {
       const cTemp = document.createElement('template')
       cTemp.innerHTML = template
 
       this.sr = this.attachShadow({ mode: 'open' })
       this.sr.appendChild(cTemp.content.cloneNode(true))
    }//cons

    // you can now register and handle any user/action changes
    // this.flux.changeState('key1', 'someNewValue')
    // this.flux.register('CHANGE', function(data){})

 }//custel
