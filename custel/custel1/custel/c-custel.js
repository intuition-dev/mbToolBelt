addEventListener('DOMDelayed', function () {
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
            console.log('cons c 1');
            this.sr = this.attachShadow({ mode: 'closed' });
            this.sr.appendChild(cTemp.content.cloneNode(true));
            this.sr.addEventListener('click', function (e) {
                console.log(e.composedPath()[0]);
            });
            dispatchEvent(new CustomEvent('c-custel-x', { detail: { a: 'b', c: 'd' } }));
        }
        static get observedAttributes() { return ['bla']; }
        attributeChangedCallback(aName, oldVal, newVal) {
            console.log('custel received message', aName, newVal);
        }
        setViewModel(vm) {
            console.log('a ViewModel can be set here if separation is needed');
        }
    });
});
