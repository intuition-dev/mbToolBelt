
   // devOps
depp.define({
   'sentry'   :'//browser.sentry-cdn.com/5.3.0/bundle.min.js'
   ,'clicky' :'//static.getclicky.com/js'

})

// <script async src="https://cdn.jsdelivr.net/npm/perfops-rom"></script>

depp.require(['DOM','poly'], function() {
   setTimeout(function(){
   depp.require([], function() {


      site24()
   })//inner
   },100)//to
})

function site24() {

   console.log('site 24 activated')
}


function clickyDone() {
   console.log('clicky activated')
}
function sentryDone() {
   console.log('sentry activated')
}
