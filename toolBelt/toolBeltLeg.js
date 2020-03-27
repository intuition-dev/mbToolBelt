/*

*/
depp.define({
    // 'polyIO': 'https://polyfill.io/v3/polyfill.min.js?flags=gated&callback=polyIO&features= 
    //  WebAnimations IntersectionObserver IntersectionObserverEntry
    // console.trace  requestAnimationFrame '
    'poly-sticky': [
        //poly for sticky
        'https://cdn.jsdelivr.net/npm/stickyfilljs@2.1.0/dist/stickyfill.min.js'
    ],
    'poly-dialog': ['https://cdn.jsdelivr.net/npm/dialog-polyfill@0.5.0/dist/dialog-polyfill.min.js',
        'https://cdn.jsdelivr.net/npm/dialog-polyfill@0.5.0/dist/dialog-polyfill.min.js']
    // check "ResizeObserver" in window
    ,
    'poly-resize-observer': 'https://cdn.jsdelivr.net/gh/que-etc/resize-observer-polyfill@v1.5.1/dist/ResizeObserver.min.js',
    'disableAutoFill': ['#jquery', 'https://cdn.jsdelivr.net/npm/disableautofill@1.2.8/src/jquery.disableAutoFill.min.js'],
    'debugCSS': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/debug.css',
    'bcrypt': 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/dist/bcrypt.min.js',
    'gmetrics': 'https://1490415816.rsc.cdn77.org/lib/gmetrics.js',
    'platform': 'https://cdn.jsdelivr.net/npm/platform@1.3.5/platform.min.js',
    'fontfaceobserver': 'https://cdn.jsdelivr.net/npm/fontfaceobserver@2.1.0/fontfaceobserver.standalone.min.js',
    'trace': 'https://cdn.jsdelivr.net/npm/tracekit@0.4.5/tracekit.min.js',
    'gridformsDefaultStyle': ['https://cdn.jsdelivr.net/npm/gridforms@1.0.6/gridforms/gridforms.min.css'],
    'gridformsJS': ['https://cdn.jsdelivr.net/npm/gridforms@1.0.6/gridforms/gridforms.min.js']
    // Use for context, SPA and complex apps.jakesgordon requires Commercial License 
    ,
    'state-machine': ['https://cdn.jsdelivr.net/npm/javascript-state-machine@3.1.0/lib/state-machine.min.js'],
    'jqFlip': ['#jquery', 'https://cdn.jsdelivr.net/gh/nnattawat/flip@v1.1.2/dist/jquery.flip.min.js']
    //todo: remove cookie
    ,
    'instantpage': ['https://cdn.jsdelivr.net/npm/instant.page@3.0.0/instantpage.min.js']
    // layout
    ,
    'masonry': 'https://cdn.jsdelivr.net/npm/masonry-layout@4.2.2/masonry.min.js'
    // charts
    ,
    'smoothie': 'https://cdn.jsdelivr.net/npm/smoothie@1.35.0/smoothie.min.js',
    'morris': ['jquery', 'raphael', '//cdn.jsdelivr.net/gh//morrisjs/morris.js@0.5.1/morris.min.js'],
    'justgage': ['#raphael', 'https://cdn.jsdelivr.net/npm/justgage@1.3.2/dist/justgage.min.js'],
    'circles': 'https://cdn.jsdelivr.net/npm/circles.js@0.0.6/circles.min.js',
    'jqMapa': ['#jquery', '#raphael', 'https://cdn.jsdelivr.net/npm/jquery-mapael@2.2.0/js/jquery.mapael.min.js'],
    'raphael': 'https://cdn.jsdelivr.net/npm/raphael@2.3.0/raphael.min.js',
    'snap.svg': 'https://cdn.jsdelivr.net/npm/snapsvg@0.5.1/dist/snap.svg.min.js',
    'odometerBounty': 'https://cdn.jsdelivr.net/npm/bounty@1.2.1/lib/bounty.js',
    'xterm': [
        'https://cdn.jsdelivr.net/npm/xterm@4.4.0/lib/xterm.min.js',
        'https://cdn.jsdelivr.net/npm/xterm@4.4.0/css/xterm.css',
        'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/xterm/AttachAddon.min.js',
        'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/xterm/FitAddon.min.js'
    ]
    // upload libs to pick, also css or ?
    ,
    'filepond': ['https://cdn.jsdelivr.net/npm/filepond@4.4.9/dist/filepond.min.css', 'https://cdn.jsdelivr.net/npm/filepond@4.4.9/dist/filepond.min.js'],
    'uppy': ['https://cdn.jsdelivr.net/npm/uppy@1.4.0/dist/uppy.min.css', 'https://cdn.jsdelivr.net/npm/uppy@1.4.0/dist/uppy.min.js']
    //intro steps
    ,
    'hopscotch': ['https://cdn.jsdelivr.net/npm/hopscotch@0.3.1/dist/js/hopscotch.min.js', 'https://cdn.jsdelivr.net/npm/hopscotch@0.3.1/dist/css/hopscotch.min.css']
    // gesture
    ,
    'zingtouch': 'https://cdn.jsdelivr.net/npm/zingtouch@1.0.6/index.min.js',
    'autoComplete': 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@5.0.0/dist/js/autoComplete.min.js',
    'Vanilla-DataTables': ['https://cdn.jsdelivr.net/gh/INTUITION-dev/Vanilla-DataTables@v2.0.2/src/vanilla-dataTables.min.js', 'https://cdn.jsdelivr.net/gh/INTUITION-dev/Vanilla-DataTables@v2.0.2/src/vanilla-dataTables.min.css'],
    'listjs': ['https://cdn.jsdelivr.net/npm/list.js@1.5.0/dist/list.min.js']
    // drag and drop
    ,
    'sortablejs': ['https://cdn.jsdelivr.net/npm/sortablejs@1.10.0-rc3/Sortable.min.js'],
    'split': 'https://cdn.jsdelivr.net/npm/split.js@1.5.11/dist/split.min.js',
    'accordion': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/jquery-accordion/js/jquery.accordion.min.js', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/jquery-accordion/css/jquery.accordion.min.css'],
    'emailjs': ['https://cdn.emailjs.com/sdk/2.4.1/email.min.js'],
    'pagination': ['#jquery', 'https://cdn.jsdelivr.net/npm/paginationjs@2.1.5/dist/pagination.min.js'],
    'js-yaml': 'https://cdn.jsdelivr.net/npm/js-yaml@3.13.1/dist/js-yaml.min.js'
    // load after jquery is ready
    ,
    'codemirror': ['https://cdn.jsdelivr.net/npm/codemirror@5.51.0/lib/codemirror.min.css', 'https://cdn.jsdelivr.net/npm/codemirror@5.51.0/lib/codemirror.min.js', 'https://cdn.jsdelivr.net/npm/codemirror@5.51.0/mode/markdown/markdown.min.js', 'https://cdn.jsdelivr.net/npm/codemirror@5.51.0/mode/yaml/yaml.min.js', 'https://cdn.jsdelivr.net/npm/codemirror@5.51.0/mode/pug/pug.min.js'],
    'hotkeys': 'https://cdn.jsdelivr.net/npm/hotkeys-js@3.7.1/dist/hotkeys.min.js',
    'select2': [
        'https://cdn.jsdelivr.net/gh/select2/select2@4.0.10/dist/css/select2.min.css',
        'https://cdn.jsdelivr.net/gh/select2/select2@4.0.10/dist/js/select2.min.js'
    ],
    'feather-icons': 'https://cdn.jsdelivr.net/npm/feather-icons@4.24.1/dist/feather.min.js'
    // try to use 'long' linuxtime for service | api calls 
    ,
    'timeago': 'https://cdn.jsdelivr.net/gh/hustcc/timeago.js@3.0.0/dist/timeago.min.js',
    'luxon': 'https://cdn.jsdelivr.net/npm/luxon@1.22.0/build/global/luxon.min.js'
    // flatpickr
    ,
    'datepickr': ['https://cdn.jsdelivr.net/npm/flatpickr@4.6.3/dist/flatpickr.min.js',
        'https://cdn.jsdelivr.net/npm/flatpickr@4.6.3/dist/themes/airbnb.css'
    ]
    // use for validation. eg: check in VM and return 'OK' to view|binding; or return validation errors if found
    // http://validatejs.org
    ,
    'validate': 'https://cdn.jsdelivr.net/npm/validate.js@0.13.1/validate.min.js',
    'v8n': 'https://cdn.jsdelivr.net/npm/v8n@1.3.3/dist/v8n.min.js',
    'mustache': 'https://cdn.jsdelivr.net/npm/mustache@3.0.1/mustache.min.js',
    'chance': 'https://cdn.jsdelivr.net/npm/chance@1.1.4/chance.min.js'
    // https://www.smashingmagazine.com/2012/12/css-baseline-the-good-the-bad-and-the-ugly
    ,
    'baseline': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/baseline.min.js',
    'baseliner': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/baseliner.js'],
    'typewriter': 'https://cdn.jsdelivr.net/npm/typewriter-effect@2.12.1/dist/core.min.js',
    'letteringjs': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/letteringjs.min.js'],
    'flexibleArea': ['#jquery', 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/jquery.flexibleArea.min.js']
    // markdown UI
    ,
    'tail.writer': 'https://cdn.jsdelivr.net/gh/pytesNET/tail.writer@v0.4.1/js/tail.writer-full.min.js',
    'tail.writerWhite': 'https://cdn.jsdelivr.net/gh/pytesNET/tail.writer@v0.4.1/css/tail.writes-white.css'
    //check box
    ,
    'magic-input': 'https://cdn.jsdelivr.net/npm/magic-input@1.0.2/dist/magic-input.css',
    'slickCarousel': ['https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.min.css']
    //  SASS?:
    ,
    'ihover': 'https://cdn.jsdelivr.net/npm/imagehover.css@1.0.0/css/imagehover.min.css'
    // images
    ,
    'lazysizes': 'https://cdn.jsdelivr.net/npm/lazysizes@5.1.0/lazysizes.min.js',
    'svgloader': 'https://cdn.jsdelivr.net/npm/boomsvgloader@0.0.2/dist/js/boomsvgloader.min.js',
    'imagesloaded': ['https://cdn.jsdelivr.net/npm/imagesloaded@4.1.4/imagesloaded.min.js'],
    'load-image': 'https://cdn.jsdelivr.net/npm/blueimp-load-image@2.23.0/js/load-image.min.js',
    'glfx': ['https://cdn.jsdelivr.net/npm/glfx@0.0.4/glfx.min.js'] // eg tilt shift
    //video
    ,
    'bideo': 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/bideo/bideo.min.js'
    //voice cmd
    ,
    'annYang': 'https://cdn.jsdelivr.net/npm/annyang@2.6.1/dist/annyang.min.js'
    //FX section
    ,
    'deli': ['https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/src/vendors/delighters.min.js']
    // transitions
    ,
    'slider': ['https://cdn.jsdelivr.net/gh/joelambert/Flux-Slider@v1.4.4/js/flux.min.js'],
    'zenscroll': ['https://cdn.jsdelivr.net/npm/zenscroll@4.0.2/zenscroll-min.js']
    // simple FTS: 
    ,
    'fuse': 'https://cdn.jsdelivr.net/npm/fuse.js@3.4.4/dist/fuse.min.js'
    // get scss and make                  
    ,
    'jQCloud': ['#jquery', 'https://cdn.jsdelivr.net/gh/mistic100/jQCloud@v2.0.3/dist/jqcloud.min.js'],
    'tippy': 'https://cdn.jsdelivr.net/npm/tippy.js@4.3.1/umd/index.all.min.js'
    // layout, needs CSS
    ,
    'bricklayer': 'https://cdn.jsdelivr.net/npm/bricklayer@0.4.3/dist/bricklayer-node.min.js',
    'jqFAQ': ['#jquery', 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.quicksilver.min.js', 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.simpleFAQ.min.css', 'https://cdn.jsdelivr.net/gh/jakerella/jquerySimpleFAQ@v1.0.0/src/jquery.simpleFAQ.min.js'],
    'stripe': 'https://js.stripe.com/v3/',
    'underscore': 'https://cdn.jsdelivr.net/npm/underscore@1.9.2/underscore.min.js',
    'pubnub': ['https://cdn.pubnub.com/sdk/javascript/pubnub.4.21.7.js']
   
})

window.ENV = '#{ENV}'; //- for comps, but it is also in scope for Pug for ENV logic

class ToolBeltLeg {

    constructor() {

        //poly dialog
        var dialogSupport = window.HTMLDialogElement;
        if (!dialogSupport) {
            depp.require(['poly-dialog'], function () {
                depp.done('dialogReady');
            });
        }
        else {
            depp.done('dialogReady');
        }

    }

    //set data
    setAttrDa(el, obj) {
        var clone = JSON.parse(JSON.stringify(obj));
        el.setAttribute('data', JSON.stringify(clone));
    } //()

    reqAnif(foo) {
        requestAnimationFrame(function () {
            foo();
        });
    } //()

    renderMustache(root, id, data) {
        let template = root.getElementById(id).innerHTML;
        return Mustache.render(template, data);
    }

} //class

window.toolBeltLeg = new ToolBeltLeg();
