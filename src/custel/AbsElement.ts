import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.2/eventFlux/EventFlux.js'

// Base Custom DOM class with Flux support. 
export class AbsElement extends HTMLElement {
    sr // shadow root handle
    setup(template) {
       const cTemp = document.createElement('template')
       cTemp.innerHTML = template
 
       this.sr = this.attachShadow({ mode: 'closed' })
       this.sr.appendChild(cTemp.content.cloneNode(true))
    }//cons

    flux
    createFlux(name) {
      this.flux = new EventFlux().getTopic(name, { 'persistent': true })
    }
    getFlux() {return this.flux }
    
    // you can now register and handle any user/action changes
    // this.flux.changeState('key1', 'someNewValue')
    // this.flux.register('CHANGE', function(data){})

 }//custel
