
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.11/eventFlux/EventFlux.js'


// get the boilerplate:
import { CompElement } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.11/src/slotComp/AbsSlotComp.js';
class Custel1 extends CompElement {
    template = `
    <style>:host {
       all: initial;
       display: block;
       contain: content;
    }</style>
    
    <b>I'm a Cust. El</b>
    <slot></slot>
    `;    
    constructor() {
        super();
        EventFlux.init()

        console.log('Comp1');
        this.setup(this.template) // just a helper function for boiler plate.
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        }); //click
        //example of sending message to page
        defEventFlux.dispatch('c-custel-x', { a: 'b', c: 'd' });
        
    } //cons

    //register properties w/ reflection to attributes, and get pg message or get attribute
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    } //()

} //custel

customElements.define('c-custel', Custel1)
console.log('loaded')
