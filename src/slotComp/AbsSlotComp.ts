import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.11/eventFlux/EventFlux.js'

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
   

   getInputsValue(inputs) {
      const obj = {}
      for(var input in inputs) {
         const value = inputs[input].value
         const key = inputs[input].id
         if(!key) continue
         obj[key]=value
      }
      return obj
   }//()

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

}//custel
