

console.log('loaded')

var cTemp = document.createElement('template')
cTemp.innerHTML = `
<style>:host {
   all: initial;
   display: block;
   contain: content;
}</style>

<b>I'm a Cust. El</b>
<slot></slot>
`
// https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements
window.customElements.define('c-custel', class extends HTMLElement {
   sr // shadow root var
   // could hold state, but I use View Model
   state = {}
   constructor() {
      super()
      console.log('cons c 1')

      this.sr = this.attachShadow({ mode: 'closed' })
      this.sr.appendChild(cTemp.content.cloneNode(true))

      this.sr.addEventListener('click', function (e) {
         console.log(e.composedPath()[0])
      })//click

      //example of sending message
      depp.require(['eventBus'], function() {
         DeventBus.dispatch('c-custel-x', { a: 'b', c: 'd' }) 
      })
   }//cons

   //register properties w/ reflection to attributes, and get pg message or get attribute
   static get observedAttributes() { return ['bla', 'doc'] }
   attributeChangedCallback(aName, oldVal, newVal) { // handler
      console.log('custel received message', aName, newVal)
   }//()

   setViewModel(vm) {// other methods 
      console.log('a ViewModel can be set if separation is required')
   }//()
})//custel

