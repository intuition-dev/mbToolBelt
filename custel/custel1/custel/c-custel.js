// get the boilerplate:
import { CompElement } from '/custel/CompElement.js';
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
        this.state = {}; // could hold state internally, but I use ViewModel externally
        console.log('h1');
        this.setup(this.template);
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        }); //click
        //example of sending message to page
        depp.require(['eventBus'], function () {
            DeventBus.dispatch('c-custel-x', { a: 'b', c: 'd' });
        });
    } //cons
    //register properties w/ reflection to attributes, and get pg message or get attribute
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    } //()
    setViewModel(vm) {
        console.log('a ViewModel can be set if separation is required, or use EventBus to be loosely coupled');
    } //()
} //custel
customElements.define('c-custel', Custel1);
console.log('loaded');
