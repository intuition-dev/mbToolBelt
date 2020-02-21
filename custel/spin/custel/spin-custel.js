var __extends = (this && this.__extends) || (function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] }
                instanceof Array && function(d, b) { d.__proto__ = b; }) ||
            function(d, b) { for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function(d, b) {
        extendStatics(d, b);

        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
depp.require(['DOMDelayed'], function() {
    var cTemp = document.createElement('template');
    cTemp.innerHTML = "\n<div class=\"spin-modal\" id=\"spin1\" >\n   <div class=\"spin-modal-con\">\n   <div class=\"spinner\"></div>\n   </div>\n</div>\n\n<style>\n\nhtml{line-height:1.15;-webkit-text-size-adjust:100%;}\nbody{margin:0;}\nmain{display:block;}\nb,strong{font-weight:bolder;}\n[hidden]{display:none;}\n.spin-modal{position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;pointer-events:none;-webkit-transition:all 2s;transition:all 2s;background-color:rgba(0,0,0,0.3);}\n.spin-modal-con{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:70%;}\n.spinner{border:4px solid white;border-top:4px solid black;border-radius:50%;width:30px;height:30px;-webkit-animation:spin .8s linear infinite;animation:spin .8s linear infinite;}\n@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}\n 100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}\n@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}\n 100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}\n\n</style>\n";
    console.log('loaded');
    window.customElements.define('spin-custel', (function(_super) {
        __extends(class_1, _super);

        function class_1() {
            var _this = _super.call(this) || this;
            console.log('CONS');
            _this.sr = _this.attachShadow({ mode: 'open' });
            _this.sr.appendChild(cTemp.content.cloneNode(true));
            _this.tmpl = cTemp.innerHTML;
            var THIZ = _this;
            addEventListener('spin-start', function(e) {
                THIZ.spin();
            });
            addEventListener('spin-stop', function(e) {
                THIZ.stop();
            });
            return _this;
        }
        class_1.prototype.spin = function() {
            var THIZ = this;
            console.log('spin');
            this.sr.innerHTML = this.tmpl;
        };
        class_1.prototype.stop = function() {
            var THIZ = this;
            reqAnif(function() {
                console.log('stop?');
                THIZ.sr.innerHTML = '';
            });
        };
        return class_1;
    }(HTMLElement)));
});