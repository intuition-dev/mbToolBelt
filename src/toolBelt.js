//Thanos has a glove. We just gave you a tool belt!:

/* This file is a toolbelt, a curated list of libs to use when a need arises. 
 And it has auto poly fill for: promise, fetch, CustomEvents, and Standard Custom Elements - for IE 11 and Modern browsers
 Also tries for a bit of prep in case of Electron or Cordova/PhoneGap.
 And fight FOUT

Any locally hosted lib is because we can't find it on a CDN or they have poor builds so we have to host
 */

console.log('start')
depp.define({ // depp.js and eventBus are the only dependencies. the rest are polyfills and nice to haves
  'eventBus':'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/EventBus.js'
})
depp.require('eventBus') // DeventBus is the default event bus in the code

function onDOM_() {
  depp.done('DOM')
}//()
document.addEventListener('deviceready', onDOM_, false)
document.addEventListener('DOMContentLoaded', onDOM_, false)

addEventListener('WebComponentsReady', function (e) { // step 2
  console.log('WebComponentsReady')
  depp.done('WebComponentsReady')
  depp.require('polyIO') // load polyIO
})

var supportsES6 = function () {
  try {
    new Function("(a = 0) => a")
    return true
  }
  catch (err) {
    return false
  }
}()

function polyIO() { // callback step 3
  console.log('polyIO')
  if (supportsES6) { // modern 
    console.log('step4T', supportsES6)
    depp.require('es5-adapter', function () {
      console.log('poly', Date.now() - _start)
      depp.done('poly')
    })//depp
  } else {  // ie 11
    console.log('step4F', supportsES6)
    depp.require('poly-11+', function () {
      console.log('poly', Date.now() - _start)
      depp.done('poly')
    })
  }//else
}//()

depp.define({

//  'webcomponents-loader': 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.0/webcomponents-loader.js'
// https://github.com/webcomponents/webcomponentsjs
  'es5-adapter': 'https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.4.0/custom-elements-es5-adapter.js'

  , 'polyIO': 'https://polyfill.io/v3/polyfill.min.js?flags=gated&callback=polyIO&features=fetch%2CWebAnimations%2CArray.prototype.find%2CArray.prototype.findIndex%2CArray.prototype.map%2CIntersectionObserver%2CIntersectionObserverEntry%2Cconsole.trace%2Cconsole.debug%2CHTMLTemplateElement%2CrequestAnimationFrame%2CPromise%2CCustomEvent'

  , 'poly-11+': [
    // and closest ie11 - don't use v3
    , 'https://cdn.jsdelivr.net/npm/element-closest@2.0.2/element-closest.min.js'
    // fit-images css
    , 'https://cdn.jsdelivr.net/gh/fregante/object-fit-images@v3.2.3/dist/ofi.min.js'
    //poly for sticky
    , 'https://cdn.jsdelivr.net/npm/stickyfilljs@2.1.0/dist/stickyfill.min.js'
  ]

  , 'poly-dialog': ['https://cdn.jsdelivr.net/npm/dialog-polyfill@0.5.0/dist/dialog-polyfill.min.js'
                   , 'https://cdn.jsdelivr.net/npm/dialog-polyfill@0.5.0/dist/dialog-polyfill.min.js']

  // check "ResizeObserver" in window
  , 'resize-observer-poly': 'https://cdn.jsdelivr.net/gh/que-etc/resize-observer-polyfill@v1.5.1/dist/ResizeObserver.min.js'
  // end poly

  , 'disableAutoFill': ['#jquery', 'https://cdn.jsdelivr.net/npm/disableautofill@1.2.8/src/jquery.disableAutoFill.min.js']
  , 'debugCSS': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/debug.css'

  , 'RPC': ['#poly', '#lz-string', 'https://cdn.jsdelivr.net/gh/intuition-dev/httpRPC@1.0.1/src/node-srv/browser/httpRPC.js']
  , 'SPA': ['#eventBus', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/spa-ts-router/spa-router.min.js']

  , 'gmetrics':'https://1490415816.rsc.cdn77.org/lib/gmetrics.js'

  , 'lz-string': 'https://cdn.jsdelivr.net/npm/lz-string@1.4.4/libs/lz-string.min.js'

  , 'gridformsDefaultStyle': ['https://cdn.jsdelivr.net/npm/gridforms@1.0.6/gridforms/gridforms.min.css']
  , 'gridformsJS': ['https://cdn.jsdelivr.net/npm/gridforms@1.0.6/gridforms/gridforms.min.js']

  //removes FOUT if you don't put font family in top (then load other, then font, after font: full style)
  , 'fontloader': ['#eventBus', 'https://cdn.jsdelivr.net/npm/webfontloader@1.6.28/webfontloader.min.js']

  // Use for context, SPA and complex apps. Commercial License # MetaBake LLC
  , 'state-machine': ['#eventBus', 'https://cdn.jsdelivr.net/npm/javascript-state-machine@3.1.0/lib/state-machine.min.js']

  , 'jqFlip': ['#jquery', 'https://cdn.jsdelivr.net/gh/nnattawat/flip@v1.1.2/dist/jquery.flip.min.js']

  , 'instantpage': ['#poly', 'https://cdn.jsdelivr.net/npm/instant.page.es5@2.0.0/instantpage.es5.min.js']

  // charts
  , 'smoothie': 'https://cdn.jsdelivr.net/npm/smoothie@1.35.0/smoothie.min.js'
  , 'morris': ['jquery', 'raphael', '//cdn.jsdelivr.net/gh//morrisjs/morris.js@0.5.1/morris.min.js']
  , 'justgage': ['#raphael', 'https://cdn.jsdelivr.net/npm/justgage@1.3.2/dist/justgage.min.js']
  , 'vega': [ 'https://cdn.jsdelivr.net/npm/vega@5.9.0'

            , 'https://cdn.jsdelivr.net/npm/vega-lite@4.0.2'

            , 'https://cdn.jsdelivr.net/npm/vega-embed@6.2.1'
            , 'https://cdn.jsdelivr.net/npm/vega-tooltip@0.20.0/build/vega-tooltip.min.js'
   ]

  // upload libs to pick, also css or ?
  , 'filepond': ['https://cdn.jsdelivr.net/npm/filepond@4.4.9/dist/filepond.min.css', 'https://cdn.jsdelivr.net/npm/filepond@4.4.9/dist/filepond.min.js']
  , 'uppy': ['https://cdn.jsdelivr.net/npm/uppy@1.4.0/dist/uppy.min.css', 'https://cdn.jsdelivr.net/npm/uppy@1.4.0/dist/uppy.min.js']

  //intro steps
  , 'hopscotch': ['https://cdn.jsdelivr.net/npm/hopscotch@0.3.1/dist/js/hopscotch.min.js'
               , 'https://cdn.jsdelivr.net/npm/hopscotch@0.3.1/dist/css/hopscotch.min.css']

  // gesture
  , 'zingtouch': 'https://cdn.jsdelivr.net/npm/zingtouch@1.0.6/index.min.js'

  , 'autoComplete': 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@5.0.0/dist/js/autoComplete.min.js'

  , 'jquery': ['#DOM', '#poly', 'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js']

  , 'Vanilla-DataTables': [ 'https://cdn.jsdelivr.net/gh/intuition-dev/Vanilla-DataTables@v2.0.2/src/vanilla-dataTables.min.js'
                          , 'https://cdn.jsdelivr.net/gh/intuition-dev/Vanilla-DataTables@v2.0.2/src/vanilla-dataTables.min.css']

  , 'listjs': [ 'https://cdn.jsdelivr.net/npm/list.js@1.5.0/dist/list.min.js']

  // drag and drop
  , 'sortablejs': ['https://cdn.jsdelivr.net/npm/sortablejs@1.10.0-rc3/Sortable.min.js']

  , 'split': 'https://cdn.jsdelivr.net/npm/split.js@1.5.11/dist/split.min.js'

  , 'accordion': ['#jquery'
    , 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/jquery-accordion/js/jquery.accordion.min.js'
    , 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/jquery-accordion/css/jquery.accordion.min.css']

  , 'emailjs': ['https://cdn.emailjs.com/sdk/2.3.2/email.min.js']

  , 'pagination': ['#jquery', 'https://cdn.jsdelivr.net/npm/paginationjs@2.1.4/dist/pagination.min.js']

  , 'js-yaml': 'https://cdn.jsdelivr.net/npm/js-yaml@3.13.1/dist/js-yaml.min.js'

  // load after jquery is ready
  , 'qunit': ['#jquery', 'https://cdn.jsdelivr.net/npm/qunit@2.9.2/qunit/qunit.min.css', 
    , 'https://cdn.jsdelivr.net/npm/qunit@2.9.2/qunit/qunit.min.js'
    , 'https://cdn.jsdelivr.net/npm/qunit-promises@0.2.0/qunit-promises.min.js'
    , '#validate'
  ]

  , 'codemirror': ['https://cdn.jsdelivr.net/npm/codemirror@5.48.4/lib/codemirror.min.css'
        , 'https://cdn.jsdelivr.net/npm/codemirror@5.48.4/lib/codemirror.min.js'
        , 'https://cdn.jsdelivr.net/npm/codemirror@5.48.4/mode/markdown/markdown.min.js'
        , 'https://cdn.jsdelivr.net/npm/codemirror@5.48.4/mode/yaml/yaml.min.js'
        , 'https://cdn.jsdelivr.net/npm/codemirror@5.48.4/mode/pug/pug.min.js'
      ]

  , 'hotkeys': 'https://cdn.jsdelivr.net/npm/hotkeys-js@3.7.1/dist/hotkeys.min.js'

  , 'select2': [
        'https://cdn.jsdelivr.net/gh/select2/select2@4.0.10/dist/css/select2.min.css',
        'https://cdn.jsdelivr.net/gh/select2/select2@4.0.10/dist/js/select2.min.js']

  , 'feather-icons': 'https://cdn.jsdelivr.net/npm/feather-icons@4.24.1/dist/feather.min.js'

  // try to use 'long' linuxtime for service | api calls 
  , 'timeago': 'https://cdn.jsdelivr.net/gh/hustcc/timeago.js@3.0.0/dist/timeago.min.js'
  , 'luxon': 'https://cdn.jsdelivr.net/npm/luxon@1.17.3/build/global/luxon.min.js'
  , 'datepickr': ['https://cdn.jsdelivr.net/npm/flatpickr@4.6.3/dist/flatpickr.min.js',
                  'https://cdn.jsdelivr.net/npm/flatpickr@4.6.3/dist/themes/airbnb.css']

  // use for validation. eg: check in VM and return 'OK' to view|binding; or return validation errors if found
  // http://validatejs.org
  , 'validate': 'https://cdn.jsdelivr.net/npm/validate.js@0.13.1/validate.min.js'

  , 'mustache': 'https://cdn.jsdelivr.net/npm/mustache@3.0.1/mustache.min.js'

  , 'chance': 'https://cdn.jsdelivr.net/npm/chance@1.1.4/chance.min.js'

  // https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly
  , 'baseline': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/baseline.min.js'
  , 'baseliner': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/baseliner.js']
  , 'typewriter': 'https://cdn.jsdelivr.net/npm/typewriter-effect@2.12.1/dist/core.min.js'
  , 'letteringjs': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/letteringjs.min.js']

  , 'flexibleArea': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/jquery.flexibleArea.min.js']

  // markdown UI
  , 'tail.writer': 'https://cdn.jsdelivr.net/gh/pytesNET/tail.writer@v0.4.1/js/tail.writer-full.min.js'
  , 'tail.writerWhite': 'https://cdn.jsdelivr.net/gh/pytesNET/tail.writer@v0.4.1/css/tail.writes-white.css'

  //check box
  , 'magic-input': 'https://cdn.jsdelivr.net/npm/magic-input@1.0.2/dist/magic-input.css'

  , 'slickCarousel': ['https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
    , 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css'
    , 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css']

  , 'circles': 'https://cdn.jsdelivr.net/npm/circles.js@0.0.6/circles.min.js'

  , 'client':'https://cdn.jsdelivr.net/npm/clientjs@0.1.11/dist/client.min.js'
  , 'trace' : 'https://cdn.jsdelivr.net/npm/tracekit@0.4.5/tracekit.min.js'

  //  SASS?:
  , 'ihover': 'https://cdn.jsdelivr.net/npm/imagehover.css@1.0.0/css/imagehover.min.css'

  // images
  , 'lazysizes': 'https://cdn.jsdelivr.net/npm/lazysizes@5.1.0/lazysizes.min.js'
  , 'svgloader': 'https://cdn.jsdelivr.net/npm/boomsvgloader@0.0.2/dist/js/boomsvgloader.min.js'
  , 'imagesloaded': ['https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.min.js']
  , 'load-image': 'https://cdn.jsdelivr.net/npm/blueimp-load-image@2.23.0/js/load-image.min.js'
  , 'glfx': ['https://cdn.jsdelivr.net/npm/glfx@0.0.4/glfx.min.js'] // eg tilt shift

  , 'snap.svg': 'https://cdn.jsdelivr.net/npm/snapsvg@0.5.1/dist/snap.svg.min.js'

  //video
  , 'bideo': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/bideo/bideo.min.js'

  //voice cmd
  , 'annYang': 'https://cdn.jsdelivr.net/npm/annyang@2.6.1/dist/annyang.min.js'

  //FX section
  , 'deli': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/src/vendors/delighters.min.js']
  , 'odometerBounty': 'https://cdn.jsdelivr.net/npm/bounty@1.2.1/lib/bounty.js'

  // transitions
  , 'slider': ['https://cdn.jsdelivr.net/gh/joelambert/Flux-Slider@v1.4.4/js/flux.min.js']

  , 'zenscroll': ['https://cdn.jsdelivr.net/npm/zenscroll@4.0.2/zenscroll-min.js']

  , 'jqMapa': ['#jquery', '#raphael', 'https://cdn.jsdelivr.net/npm/jquery-mapael@2.2.0/js/jquery.mapael.min.js']
  , 'raphael': 'https://cdn.jsdelivr.net/npm/raphael@2.3.0/raphael.min.js'

  // simple FTS: 
  , 'fuse': 'https://cdn.jsdelivr.net/npm/fuse.js@3.4.4/dist/fuse.min.js'

  // get scss and make                  
  , 'jQCloud': ['#jquery', 'https://cdn.jsdelivr.net/gh/mistic100/jQCloud@v2.0.3/dist/jqcloud.min.js']

  , 'tippy': 'https://cdn.jsdelivr.net/npm/tippy.js@4.3.1/umd/index.all.min.js'

  // layout, needs CSS
  , 'bricklayer': 'https://cdn.jsdelivr.net/npm/bricklayer@0.4.3/dist/bricklayer-node.min.js'

  , 'jqFAQ': ['#jquery'
    , 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.quicksilver.min.js'
    , 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.simpleFAQ.min.css'
    , 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.simpleFAQ.min.js']

  , 'stripe': 'https://js.stripe.com/v3/'

   ,'underscore':'https://cdn.jsdelivr.net/npm/underscore@1.9.1/underscore.min.js'

  , 'pubnub': ['https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.js']

  //*** INTU Comps:
  , 'marq-custel': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/custel/marq/marq-custel/marq-custel.min.js']
  , 'contactus-comp': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/custel/contactus/custel/contactus-comp.min.js']
  , 'spin-custel': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/custel/spin/custel/spin-custel.min.js']

  , 'surveyitem-comp': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/custel/surveryitem/custel/surveyitem-comp.min.js']
  , 'star-custel': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.12.16/custel/starrating/custel/star-custel.js']

})

//poly dialog
var dialogSupport = window.HTMLDialogElement
if (!dialogSupport) {
  depp.require(['poly-dialog'], function () {
    depp.done('dialogOK')
    depp.done('dialogReady')
  })
} else {
  depp.done('dialogOK')
  depp.done('dialogReady')
}

// only if script is strange, else use depp
//- eg addScript('bla.js', null, 'api-key', 'key123') when they want you to use the tag: so you can in your own sequence
function addScript(src, callback, attr, attrValue, id) {
  var s = document.createElement('script')
  s.setAttribute('src', src)
  if (attr) s.setAttribute(attr, attrValue)
  if (id) s.id = id
  if (callback) s.onload = callback
  s.async = true // it does it anyway, as the script is async
  document.getElementsByTagName('body')[0].appendChild(s)
}

// helper for custom elements
//add element defer //////////////////////////////////////////
function addElementDe(parentEl, elName, id) {
  var el = document.createElement(elName)
  el.id = id
  parentEl.appendChild(el)
  return el
}//()

//set data
function setAttrDa(el, obj) {
  var clone = JSON.parse(JSON.stringify(obj))
  el.setAttribute('data', JSON.stringify(clone))
}//()
// end elements//////////////////////////////////////////////////////

// This async dis can help, for example in promise
function disE(evtName, msg) {
  setTimeout(function () {
    console.log('disE', evtName)
    //dispatchEvent(new CustomEvent(evtName, { detail: msg }))
    DeventBus.dispatch(evtName, msg) // ie 11
  },1)
}//()

function inView(el) { // is element in view?
  //special bonus for jQuery
  if (typeof jQuery === 'function' && el instanceof jQuery) {
    el = el[0]
  }
  var rect = el.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * You may want to call this function, or load it manually
 * emits 'onFontsLoaded'
 */
function toolBeltDefault() {
  depp.require(['poly', 'eventBus', 'client', 'trace'], function () { // 'mustache', 'feather-icons',
    reqAnif(function () {
      console.log('tBD')
      loadFonts(['Open+Sans:300,400'])
      depp.require(['instantpage'])
      //loadFonts(['Open+Sans:300,300i,400', 'PT+Serif:400,700i', 'Marmelad'])
    })//ani
  })//req
}//()

// DOMDelayed: auto loads fontLoader
depp.require(['DOM', 'eventBus', 'poly'], function () {
  console.log('dD')
  setTimeout(function () { // at end
    reqAnif(function () {

      // for custom elements use tis event:
      depp.done('DOMDelayed')
      depp.done('poly+DOM')
      disE('poly+DOM')

      setTimeout(function () { // wait again
        depp.require('fontloader')

      }, 1)

    })// wait ani
  }, 1)// wait 1
})//()

function reqAnif(foo) {
  requestAnimationFrame(function () {
    foo()
  })
}//()

// FOUT section
function loadFonts(fontsArr) {
  depp.require(['fontloader', 'eventBus', 'DOMDelayed'], function () {
    var fontConfig = {
      classes: false,
      google: {
        families: fontsArr
      },
      active: function () {
        disE('FontsLoaded', fontsArr)
      }
    }
    WebFont.load(fontConfig)
  })
}
// END FOUT section

//helps qunit not auto run 
function loadQunit() { // you have to wait on -ready and manually QUnit.start()
  // https://api.qunitjs.com/config/QUnit.config
  return new Promise(function (resolve, reject) {
    depp.require('qunit', function () {
      QUnit.config.autostart = false
      console.log('qunit-ready')
      depp.done('qunit-ready')
      resolve('OK')
    })
  })//pro
}//()

// get style value
function getStyle(el, styleProp) {
  if (el.currentStyle)
    var y = el.currentStyle[styleProp];
  else if (window.getComputedStyle)
    var y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
  return y;
}

function getUrlVars() {
  var vars = [], hash
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&')
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split('=')
    vars.push(hash[0])
    vars[hash[0]] = hash[1]
  }
  return vars
}

function renderMustache(root, id, data) {
  let template = root.getElementById(id).innerHTML
  return Mustache.render(template, data)
}

function fetchItems(items) {// requires poly.  
  return new Promise(function (resolve, reject) {
    fetch(items, {
      cache: 'default',
      keepalive: true
    }).then(function (fullResp) {
      if (!fullResp.ok)
        reject(fullResp.statusText)
      return fullResp.json()
    }).then(function (obj) {

      //'prefix' add
      var item = obj.items
      var len = item.length
      for (var i = 0; i < len; i++)
        item[i]['prefix'] = obj.prefix
      console.log(obj.items)
      resolve(obj)
    })
      .catch(function (err) {
        console.log(err)
        reject(err)
      })
  })//pro
}//()