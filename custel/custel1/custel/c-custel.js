console.log('loaded');
var cTemp = document.createElement('template');
cTemp.innerHTML = `
<style>:host {
   all: initial;
   display: block;
   contain: content;
}</style>

<b>I'm a Cust. El</b>
<slot></slot>
`;
window.customElements.define('c-custel', class extends HTMLElement {
    constructor() {
        super();
        this.state = {};
        console.log('cons c 1');
        this.sr = this.attachShadow({ mode: 'closed' });
        this.sr.appendChild(cTemp.content.cloneNode(true));
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        });
        depp.require(['eventBus'], function () {
            DeventBus.dispatch('c-custel-x', { a: 'b', c: 'd' });
        });
    }
    static get observedAttributes() { return ['bla', 'doc']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    }
    setViewModel(vm) {
        console.log('a ViewModel can be set if separation is required');
    }
});
