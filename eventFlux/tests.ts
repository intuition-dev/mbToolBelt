
console.log('tests script')

declare var QUnit
declare var loadQunit
declare var depp
declare var DefEventBus
declare var chance

var pro = loadQunit()
pro.then(function(){
   console.log('qunit loaded')

   QUnit.start()
   new TestEB()
})//pro

import { EventFlux } from './EventFlux.js'

class TestEB {
   static done1
   static done2
   static assert
   static listener


   constructor () {
      console.log('TestEB')
      
      new EventFlux()

      TestEB.listener = DefEventBus.addListener('onUData', TestEB.onVM1Data)
    

      QUnit.test( "hello test", function( assert_ ) {
         TestEB.assert = assert_
         TestEB.done1 = assert_.async()
         TestEB.done2 = assert_.async()
      })
   }//()

   static onVM1Data(data) {
      console.log('data')
      TestEB.assert.ok( true, "Passed!" )
      TestEB.done1()
      
      // test 2
      DefEventBus.removeListener( TestEB.listener )
      let arg:any ={}
      arg.srch = chance.character({ alpha: true }) + chance.character({ alpha: true })
      arg.o=1
      DefEventBus.dispatch('uFetch', arg)
      DefEventBus.addListener('onUData', TestEB.onVM2Data)
   }//()

   static onVM2Data(data2) {
      console.log('data2')
      TestEB.assert.ok( true, "Passed!" )
      TestEB.done2()
      // in here we can call RPC to send data of duration, browser and ip
      // rpc send metrics
      console.log('TestsDone')
   }//()
   
}//class


