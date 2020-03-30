
console.log('loaded')

var starTemp = document.createElement('template')
starTemp.innerHTML = `
<style>
 :host {
      display: block;
      contain: content; /* performance */
      color: blue; 
   }
  
 .star-icon {
   color: gray;
   font-size: 30px;
   position: relative; 
  }
  .star-icon.fill {
   color: black;
   font-size: 32px;
   text-shadow: 1px 1px 2px yellow;
  }
</style>
<div>Stars</div>
<div class='ratings--starts'>
   <span class='star-icon' id='s1'>☆</span><span class='star-icon' id='s2'>☆</span><span class='star-icon' id='s3'>☆</span><span class='star-icon' id='s4'>☆</span>
</div>
`


customElements.define('star-custel', class extends HTMLElement {
   sr 
   constructor() {
      super()
      this.sr = this.attachShadow({ mode: 'open' })
      this.sr.appendChild(starTemp.content.cloneNode(true))
      this.sr.addEventListener('click', function(e) {
         console.log(e.composedPath()[0])
      })//click
   }//cons

   static get observedAttributes() { return ['stars'] }
   attributeChangedCallback(aName, oldVal, newVal) { 
      console.log(aName, newVal)
      this.stars(newVal)
   }//()

   stars( el) {
      var elN = this.sr.querySelector('#s'+el)
      console.log(elN)
      elN.classList.add('fill')
      return elN
   }


})