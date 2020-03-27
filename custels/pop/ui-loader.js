
depp.define({
  'pop-custelX':'/custel/pop-custel.js'
 })

depp.require([ 'pop-custelX' ], function() {
   console.log('loaded')
 }) 


 addEventListener('POP-CUSTEL', function (evt) {
  const msg = evt.detail
  console.log(msg)
  
  var editor = document.getElementById('edit1')
  editor.innerText =  editor.innerText + msg

})//()
