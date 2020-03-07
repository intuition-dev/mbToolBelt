
# Vanilla Custom Elements

Over the years there were many .js libraries related to components that come and go.
 And they all lost out to the native / browser-built-in: the custom element API.
Modern browsers has built in support for Vanilla Custom Elements (CE) !


## Example:

There are many hello world examples of custom elements, and here is another one. Download this folder you can run with a local http server. 

## Reviewing the example use of a Custom Element

In the page we use the component:

```
  <p>in pg</p>
  <c-custel bla="3" id="c1"></c-custel>
  <p>Slot In</p>
  <script src="/page.js" type="module"></script>
  <script src="/custel/c-custel.js" type="module"></script>
```

In this case I also set an attribute and use a slot- just an example.

And here it the page.js:

```
   import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/eventFlux/EventFlux.js'
   new EventFlux()// makes defEventBus var

   // page receives messages from comp
   defEventBus.addListener('c-custel-x', function(evt) {
      console.log('**pg received message**', evt)

      // optionaly, you can interact w/ element
      let c = document.getElementById('c1')
      c.setViewModel(null)
   })
```

It loads an event system, you can use any event system you like, I used: https://github.com/intuition-dev/mbToolBelt/tree/master/eventFlux
The purpose of the event system is to receive any messages from the component. 

We also can optionally call function on the component, here I use setViewModel method I put in the component.


So I hope it shows that Custom Elements are easy to use.


## Now lets look at how we write the component

First, I wrote a setup() helper function, since that code is boiler plate and used **all** the times!

```
export class CompElement extends HTMLElement {
    sr // shadow root handle
    setup(template) {
       const cTemp = document.createElement('template')
       cTemp.innerHTML = template
 
       this.sr = this.attachShadow({ mode: 'closed' })
       this.sr.appendChild(cTemp.content.cloneNode(true))
    }//cons
 }//custel
```

Any code that you need often should be above!

And now, lets look at the component code:

```
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/eventFlux/EventFlux.js'
new EventFlux() // makes defEventBus var

// get the boilerplate:
import { CompElement } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.8/custel/custel1/custel/CompElement.js';
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

        this.state = {}; // could hold state internally, but I use ViewModel externally

        this.setup(this.template) // just a helper funciton for boiler plate.
        this.sr.addEventListener('click', function (e) {
            console.log(e.composedPath()[0]);
        }); //click
        //example of sending message to page
        defEventBus.dispatch('c-custel-x', { a: 'b', c: 'd' });
        
    } //cons

    //register properties w/ reflection to attributes, and get pg message or get attribute
    static get observedAttributes() { return ['bla', 'bla2']; }
    attributeChangedCallback(aName, oldVal, newVal) {
        console.log('custel received message', aName, newVal);
    } //()

    setViewModel(vm) {    } // just some method
} //custel

customElements.define('c-custel', Custel1)
```

First, notice the string literal: template. This is our HTML code.
Then notice that we call the setup() function.

I added a clicked event - handles a click on the component. Also it will dispatch an event to a page; and last lines are to receive
a message from the page scripts. 

And we can hold state or use a ViewModel.


## More realistic example:

- https://www.INTUITION.DEV/ex/marq


## When/why of components

- When you have SEO, main parts of page can't be components. And in general, it is easier to read the code if the main part of page/screen is 'regular'.
- You can use components with late loading interactive parts that are enactments to the main point of the page screen. If they are no interactive enactments, then you can use other ways to manage your code (eg. Pug)

## Front end architecture 

Using CE is the standard defualt. You may want to implent the Alpinejs directives and properties as needed. And then maybe write some componets like Elix - but a bit larger.

Writing a standard Custom Element is easy. But thinking of what would be a useful one is hard. One way is to 
look at popular jQuery plugins that are heavily used - and see if you can rewrite one.
