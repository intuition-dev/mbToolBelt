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
addEventListener('poly+DOM', function () {
    console.log('loaded');
    var cTemp = document.createElement('template');
    cTemp.innerHTML = "\n<style>:host {\n   all: initial;\n   display: block;\n   contain: content;\n}</style>\n\n<b>I'm Comp DOM!</b>\n<slot></slot>\n";
    window.customElements.define('c-custel', (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            console.log('cons c 1');
            _this.sr = _this.attachShadow({ mode: 'closed' });
            _this.sr.appendChild(cTemp.content.cloneNode(true));
            _this.sr.addEventListener('click', function (e) {
                console.log(e.composedPath()[0]);
            });
            dispatchEvent(new CustomEvent('c-custel-x', { detail: { a: 'b', c: 'd' } }));
            return _this;
        }
        Object.defineProperty(class_1, "observedAttributes", {
            get: function () { return ['bla']; },
            enumerable: true,
            configurable: true
        });
        class_1.prototype.attributeChangedCallback = function (aName, oldVal, newVal) {
            console.log('custel received message', aName, newVal);
        };
        class_1.prototype.setViewModel = function (vm) {
            console.log('a ViewModel can be set here if separation is needed');
        };
        return class_1;
    }(HTMLElement)));
});
