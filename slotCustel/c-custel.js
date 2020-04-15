import { AbsSlotCustel } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.14/slotCustel/slotCustel/AbsSlotCustel.min.js';
class Custel1 extends AbsSlotCustel {
    constructor() {
        super();
        this.template = `
    <style>:host {
       all: initial;
       display: block;
       contain: content;
    }</style>
    
    <b>I'm a Cust. El</b>
    <slot></slot>
    `;
        console.log('Comp1');
        this.setup(this.template);
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        });
        defEventFlux.doAction('c-custel-x', { a: 'b', c: 'd' });
    }
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    }
}
customElements.define('c-custel', Custel1);
console.log('loaded');
