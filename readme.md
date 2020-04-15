
# Slot-centric Custom Elements (SlotCustel)


## SlotCustel overview

- Why leverage components for your front end development?
The answer should be same for anything in front end development: reduce cost of development and maintenance, and improved UX/UI.
So let me show you a very good way to be a productive front end software developer. 

- Why custom elements? The big 3 front end frameworks (Vue, React, Angular) are more than a decade old and require downloading and maintain a 3rd party library. Also, I have not seen them improve productivity of front end development relative to 
even LAMP. Custom elements are built into the browser!

- How to use Custom Elements to maximize the benefits? Ans: They are Custom! So you create them per page|screen.
A costly mistake based on my experience is to prematurely leverage DRY for CustEl. Instead use a rule of 3: When you use it a 3rd time, consider a way
to  reuse - but not before. (Also people prematurely add a design system in a Custel, when it can remain at page level) But short story is: Custom per page!


Here is an example SlotCustel code, notice the default template is blank, nudging you to put DOM in the slot/page:
```javascript
   // default template
   defTemplate = `<slot></slot>`;
```


Here are 2 example of a page/screen using SlotCustel, I'm using Pug syntax instead of HTML (Pug is the default template language by the most popular JavaScript HTTP server: Express js, Pug takes about 5 seconds to learn if you know HTML)
but you can use HTML if you are old school.
A form page using SlotCustel example:
```pug
    pg-custel 
        form.grid-form#loginF
        fieldset
            div(data-row-span='1')
                div(data-field-span='1')
                label Name
                input#email.form-control(type='text')
            div(data-row-span='1')
                div(data-field-span='1')
                label Password
                input#pswd.form-control.pswd(type='password')
        #loginBut.btn.btn-sm.btn-a Login
```
And a list (list.js) page using SlotCustel:
```pug
    pg-custel 
    p Table:
    #contactLst
        table.table
        thead
            th FName
            th LName
            th Email
            th Org
        tbody.list
```

And now you can write your Custel javascript|typescript code, and manage the DOM in the slot like you would write a normal Custom Element, for example doing data-binding. Most/all the page JavaScript code is move to the SlotCustel. 
Notice that if someone needs to maintain the page, they can just edit the page DOM.

And that is the over view. Lets learn this dance. 

### Standard (non-slot) Custel example
Using a Custel in a page:
```pug
   script(type='module').
      import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.14/eventFlux/EventFlux.min.js'
      EventFlux.init()

      defEventFlux.register('c-custel-x', function(evt) {
         console.log('**pg received message**', evt)

         let c = document.getElementById('c1')// as needed
      })
   
   c-custel(bla=3)#c1
      p Slot In
   
   script(src='/c-custel.js' type='module')
```
Notice we use an Event Bus called EventFlux. EventFlux is more reliable than Custom Events. More on EventFlux:
- https://github.com/intuition-dev/mbToolBelt/tree/master/eventFlux

#### Now lets write the c-custel
Code:
```typescript
import { AbsSlotCustel } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.4.14/slotCustel/slotCustel/AbsSlotCustel.min.js';
class Custel1 extends AbsSlotCustel {
    template = `
        <style></style>
        <b>I'm a Cust. El</b>
        <slot></slot>`;
   
    constructor() {
        super();
        this.setup(this.template); // call the helper method from the base class
        this.sr.addEventListener('click', function (e) { // sr is shadow root in base class
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
```
We import AbsSlotCustel that has very few lines of helper code. 

In this example we used both slot and custom DOM, but the default is to only use slot.


### Full SlotCustel example, and application

Here is a login form SlotCustel example:
- https://github.com/intuition-dev/httpRPC/blob/master/CRUD/webApp/loginScreen/pg-custel.js
Here is a list SlotCustel example:
- https://github.com/intuition-dev/httpRPC/blob/master/CRUD/webApp/contactScreen/pg-custel.js

And you can download the full app - including API calls via: 
```
    npx mbake -c .
```

## Summary

A very productive way to develop front end is to heavily leverage slot part of the Custel. 
