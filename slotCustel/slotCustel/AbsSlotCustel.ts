// Using an event buss. Short story: it is simpler than custom events
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.14/eventFlux/EventFlux.min.js'

// A slotable component(/module).
export class AbsSlotCustel extends HTMLElement {
   
   sr // shadow root handle
   
   /**
    * A helper method
    * @param template 
    */
   setup(template) {
      EventFlux.init()
      const cTemp = document.createElement('template')
      cTemp.innerHTML = template

      this.sr = this.attachShadow({ mode: 'open' })
      this.sr.appendChild(cTemp.content.cloneNode(true))
   }//cons

   // default template
   defTemplate = `<slot></slot>`;

    // you can now register and handle any user/action changes
    // this.flux.changeState('key1', 'someNewValue')
    // this.flux.register('CHANGE', function(data){})
   
   //- eg addScript('bla.js', null, 'api-key', 'key123') when they want you to use the tag: so you can in your own sequence
   addScript(src, callback, attr, attrValue, id) {
      var s = document.createElement('script')
      s.setAttribute('src', src)
      if (attr) s.setAttribute(attr, attrValue)
      if (id) s.id = id
      if (callback) s.onload = callback
      s.async = false 
      document.getElementsByTagName('head')[0].appendChild(s)
   }

   static getInputsValue(inputs) {
      const obj = {}
      for(var input in inputs) {
         const value = inputs[input].value
         const key = inputs[input].id
         if(!key) continue
         obj[key]=value
      }
      return obj
   }//()
   
   getSlotElById(id) {
      let ret
      this.slotEls.map(function(n){
         if(n.id==id) ret = n
      })
      return ret
   }
   
   /**
    * Get elements in a slot
    */
   get slotEls() {
      // https://javascript.info/slots-composition
      return this.sr.querySelector('slot').assignedElements()
   }   

}//custel
