
// composable element, composition, IOC, DI
export class CompElement extends HTMLElement {
    sr // shadow root handle
    setup(template) {
       console.log('h1')
       const cTemp = document.createElement('template')
       cTemp.innerHTML = template
 
       this.sr = this.attachShadow({ mode: 'closed' })
       this.sr.appendChild(cTemp.content.cloneNode(true))
    }//cons
 }//custel
