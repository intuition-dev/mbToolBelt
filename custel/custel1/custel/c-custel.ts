
// after any needed poly fills are loaded
addEventListener('poly+DOM', function() {// wait on DOM to avoid double cons

console.log('loaded')

var cTemp = document.createElement('template')
cTemp.innerHTML = `
<style>:host {
   all: initial;
   display: block;
   contain: content;
}</style>

<b>I'm Comp DOM!</b>
<slot></slot>
`
// https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
window.customElements.define('c-custel', class extends HTMLElement {
   sr // shadow root var
   constructor() {
      super()
      console.log('cons c 1')

      this.sr = this.attachShadow({ mode: 'closed' })
      this.sr.appendChild(cTemp.content.cloneNode(true))

      this.sr.addEventListener('click', function (e) {
         console.log(e.composedPath()[0])
      })//click

      //example of sending message
      dispatchEvent(new CustomEvent('c-custel-x', { detail: { a: 'b', c: 'd' } }))
   }//cons

   //register properties w/ reflection to attributes, and get pg message or get attribute
   static get observedAttributes() { return ['bla'] }
   attributeChangedCallback(aName, oldVal, newVal) { // handler
      console.log('custel received message', aName, newVal)
   }//()

   setViewModel(vm) {// other methods 
      console.log('a ViewModel can be set here if separation is needed')
   }


})//custel

})