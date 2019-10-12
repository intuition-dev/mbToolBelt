var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('loaded');
var starTemp = document.createElement('template');
starTemp.innerHTML = "\n<style>\n :host {\n      display: block;\n      contain: content; /* performance */\n      color: blue; \n   }\n  \n .star-icon {\n   color: gray;\n   font-size: 30px;\n   position: relative; \n  }\n  .star-icon.fill {\n   color: black;\n   font-size: 32px;\n   text-shadow: 1px 1px 2px yellow;\n  }\n</style>\n<div>Stars</div>\n<div class='ratings--starts'>\n   <span class='star-icon' id='s1'>\u2606</span><span class='star-icon' id='s2'>\u2606</span><span class='star-icon' id='s3'>\u2606</span><span class='star-icon' id='s4'>\u2606</span>\n</div>\n";
window.customElements.define('star-custel', (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this = _super.call(this) || this;
        _this.sr = _this.attachShadow({ mode: 'closed' });
        _this.sr.appendChild(starTemp.content.cloneNode(true));
        _this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        });
        return _this;
    }
    Object.defineProperty(class_1, "observedAttributes", {
        get: function () { return ['stars']; },
        enumerable: true,
        configurable: true
    });
    class_1.prototype.attributeChangedCallback = function (aName, oldVal, newVal) {
        console.log(aName, newVal);
        this.stars(newVal);
    };
    class_1.prototype.stars = function (el) {
        var elN = this.sr.querySelector('#s' + el);
        console.log(elN);
        elN.classList.add('fill');
        return elN;
    };
    return class_1;
}(HTMLElement)));
