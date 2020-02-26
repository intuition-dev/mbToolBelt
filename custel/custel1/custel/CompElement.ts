
// composable element: IOC, DI
export class CompElement extends HTMLElement {
    sr // shadow root handle
    setup(template) {
       const cTemp = document.createElement('template')
       cTemp.innerHTML = template
 
       this.sr = this.attachShadow({ mode: 'closed' })
       this.sr.appendChild(cTemp.content.cloneNode(true))
    }//cons
 }//custel