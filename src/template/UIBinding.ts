
console.log('UI:')

declare var depp
declare var List
declare var DeventBus

class UIBinding {
   constructor() {

      document.getElementById("srchBut").addEventListener("click", function(){
         console.log('klk')

         let arg:any ={}
         DeventBus.dispatch('uFetch', arg)
      })

      DeventBus.addListener('onUData', UIBinding.onData)

   }//()

   static onData(data) {
      console.log('onData')

   }//()

}

depp.require(['DOM', 'eventBus'], function() {
   console.log('UI loaded')
   new UIBinding()
}) 

// event buss eliminates race conditions
function testE1() {

   depp.require('eventBus', function(){
     console.log('tst:')

     // data before
     DeventBus.dispatch('dataB4', 'oh hi b4')
     DeventBus.addListener('dataB4', function(data) {
       console.log('b4', data)
     })

     // data after
     DeventBus.addListener('dataAf', function(data) {
       console.log('af:', data)
     })
     DeventBus.dispatch('dataAf', 'oh hi af')
   })
 }//()

