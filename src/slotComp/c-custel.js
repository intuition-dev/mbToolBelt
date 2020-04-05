import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.12/eventFlux/EventFlux.js';
import { CompElement } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.12/src/slotComp/AbsSlotComp.js';
class Custel1 extends CompElement {
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
        EventFlux.init();
        console.log('Comp1');
        this.setup(this.template);
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        });
        defEventFlux.dispatch('c-custel-x', { a: 'b', c: 'd' });
    }
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    }
}
customElements.define('c-custel', Custel1);
console.log('loaded');
