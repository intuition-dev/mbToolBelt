
// other stuff to keep mbToolBelt clean/smaller
// this file is not provided as min.


// https://webkit.org/status


depp.define({

   'xterm': [
         'https://cdn.jsdelivr.net/npm/xterm@4.1.0/lib/xterm.min.js', 
         'https://cdn.jsdelivr.net/npm/xterm@4.1.0/css/xterm.css',
         'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v2.10.17/src/vendors/xterm/AttachAddon.min.js',
         'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v2.10.17/src/vendors/xterm/FitAddon.min.js'
         ]
         
   ,'html2canvas': ['#poly', 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js']

   ,'awesomplete': ['https://cdn.jsdelivr.net/gh/leaverou/awesomplete@v1.1.5/awesomplete.min.css',
      'https://cdn.jsdelivr.net/gh/leaverou/awesomplete@v1.1.5/awesomplete.min.js'
   ]

  , 'bcrypt': 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/dist/bcrypt.min.js'

  , 'jsForm': ['https://cdn.jsdelivr.net/npm/jquery.jsForm@1.4.0/src/jquery.jsForm.min.js']

  , 'surveyjs': ['jquery', 'https://surveyjs.azureedge.net/1.1.14/survey.jquery.min.js',
       'https://surveyjs.azureedge.net/1.1.14/survey.css']

  , 'vega': ['https://cdn.jsdelivr.net/npm/vega@5.4.0'
      , 'https://cdn.jsdelivr.net/npm/vega-embed@4.2.0'
      , 'https://cdn.jsdelivr.net/npm/vega-tooltip@0.17.0/build/vega-tooltip.min.js'
   ]
  //webGL
  , 'babylon': 'https://cdn.jsdelivr.net/npm/babylonjs@4.0.3/babylon.js' // is min

  , 'msgpack-lite': 'https://cdn.jsdelivr.net/npm/msgpack-lite@0.1.26/dist/msgpack.min.js'

  , 'hoverIntent': ['#jquery', 'https://cdn.jsdelivr.net/npm/jquery-hoverintent@1.10.0/jquery.hoverIntent.min.js']

  , 'picker.date': ['https://cdn.jsdelivr.net/npm/pickadate@3.6.4/lib/compressed/themes/classic.date.min.css', 'https://cdn.jsdelivr.net/npm/pickadate@3.6.4/lib/compressed/picker.date.min.js']
  , 'picker.time': ['https://cdn.jsdelivr.net/npm/pickadate@3.6.4/lib/compressed/themes/classic.time.min.css', 'https://cdn.jsdelivr.net/npm/pickadate@3.6.4/lib/compressed/picker.time.min.js']
  , 'zebraDate': ['https://cdn.jsdelivr.net/npm/zebra_datepicker@1.9.12/dist/css/bootstrap/zebra_datepicker.min.css',
         'https://cdn.jsdelivr.net/npm/zebra_datepicker@1.9.12/dist/zebra_datepicker.min.js']

  , 'progressBar': 'https://cdn.jsdelivr.net/npm/progressbar.js@1.0.1/dist/progressbar.min.js'

  , 'spoken': 'https://cdn.jsdelivr.net/npm/spoken@1.1.17/spoken.min.js'

  , 'mobi': 'https://cdn.jsdelivr.net/npm/@mobiscroll/javascript-lite@4.6.3/dist/js/mobiscroll.javascript.min.js'
  , 'mobiCSS': 'https://cdn.jsdelivr.net/npm/@mobiscroll/javascript-lite@4.6.3/dist/css/mobiscroll.css'

  , 'physics2': 'https://cdn.jsdelivr.net/npm/p2@0.7.1/src/p2.min.js'

  , 'jqMousewheel': ['#jquery', 'https://cdn.jsdelivr.net/npm/jquery-mousewheel@3.1.13/jquery.mousewheel.min.js']
  , 'scrollify': ['#jquery', 'https://cdn.jsdelivr.net/npm/jquery-scrollify@1.0.20/jquery.scrollify.min.js']

  // use for file uploads only
  , 'axios': 'https://cdn.jsdelivr.net/npm/axios@0.19.0/dist/axios.min.js'

  // https://www.npmjs.com/package/collect.js
  , 'collect': 'https://cdn.jsdelivr.net/npm/collect.js@4.16.6/build/collect.min.js'

  , 'fluxify': 'https://cdn.jsdelivr.net/npm/fluxify@0.2.3/fluxify.min.js'
  , 'flyd': 'https://cdn.jsdelivr.net/npm/flyd@0.2.8/flyd.min.js'

  , 'togetherjs': 'https://togetherjs.com/togetherjs-min.js'

  , 'picturefill': 'https://cdn.jsdelivr.net/npm/picturefill@3.0.3/dist/picturefill.min.js'

  , 'reframe': ['https://cdn.jsdelivr.net/npm/reframe.js@2.2.5/dist/reframe.min.js', '#DOM']
  , 'backstretchJQ': ['#jquery', 'https://cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js']
  , 'vintage': 'https://cdn.jsdelivr.net/npm/vintagejs@2.2.0/dist/vintage.min.js'

  //simplistic nav:
  , 'offcanvasNav': ['https://cdn.jsdelivr.net/npm/js-offcanvas@1.2.9/dist/_js/js-offcanvas.pkgd.js'
      , 'https://cdn.jsdelivr.net/npm/js-offcanvas@1.2.9/dist/_css/prefixed/js-offcanvas.css']

  , 'particles': 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js'

  , 'fastdomPro': ['https://cdn.jsdelivr.net/npm/fastdom@1.0.9/fastdom.min.js'
      , 'https://cdn.jsdelivr.net/npm/fastdom@1.0.9/extensions/fastdom-promised.js'
      , 'https://cdn.jsdelivr.net/npm/fastdom-sequencer@1.0.3/fastdom-sequencer.min.js'
   ]

  , 'onepage': ['https://cdn.jsdelivr.net/npm/onepage-scroll@1.3.0/onepage-scroll.css'
      , 'https://cdn.jsdelivr.net/npm/onepage-scroll@1.3.0/jquery.onepage-scroll.min.js']

  , 'parallaxImg': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v2.10.17/src/vendors/parallaxImg.min.js'

  // deprectated
  , 'vexAlertFlatReq': ['https://cdn.jsdelivr.net/npm/vex-js@4.1.0/dist/js/vex.combined.min.js'
    , 'https://cdn.jsdelivr.net/npm/vex-js@4.1.0/dist/css/vex.min.css'
    , 'https://cdn.jsdelivr.net/npm/vex-js@4.1.0/dist/css/vex-theme-flat-attack.min.css']

  //vid
  , 'mediaelement': ['https://cdn.jsdelivr.net/npm/mediaelement@4.2.12/build/mediaelementplayer.min.css'
    , 'https://cdn.jsdelivr.net/npm/mediaelement@4.2.12/build/mediaelement-and-player.min.js']

  , 'tabulator-core': ['#poly', 'https://cdn.jsdelivr.net/npm/tabulator-tables@4.4.1/dist/js/tabulator_core.min.js']
  , 'tabulatorDefaultStyle': ['https://cdn.jsdelivr.net/npm/tabulator-tables@4.4.1/dist/css/tabulator_simple.css']

})

//deprecated
function loadVexAlertFlat() { // since it has extra call at end
  return new Promise(function (resolve, reject) {
    depp.require('vexAlertFlatReq', function () {
      vex.defaultOptions.className = 'vex-theme-flat-attack' // it needs this hack
      console.log('vexFlat')
      depp.done('loadedVexAlertFlat')
      // now you can vex.dialog.confirm({ message: 'Something went wrong', callback: function(){} })//vexAlert 
      resolve('OK')
    })//req
  })//pro
}//()


/* how to load tricky things
   loadQunit().then(function(){
      console.log('qunit-ready')
   })

   loadFB().then(function(){
      console.log('FB')
   })
*/

 // https://www.mixamo.com/#/?page=1&type=Character

