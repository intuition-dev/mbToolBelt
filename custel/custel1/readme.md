
# Vanilla Custom Elements

Over the years there were many .js libraries related to components that come and go.
Examples include React, Vue, Angular, etc. And they all lost out to the native: the component API built into the browser.
Modern browsers has built in support for standard Custom Elements.

// Note: wait on DOM to avoid double cons

## Example:

If you download this folder you can run it with a local http server. 

## Reviewing the example use of a Custom Element

In the page we use the component:

```html
   <c-custel id="c1">
      <p>Slot In</p>
   </c-custel>
   <script>

      // send message to comp
      let c1 = document.getElementById('c1')
      c1.setAttribute('bla', 2) // call to the comp's property
      
   </script>
```

At the top in DOM I use the component. And I have ```</p>``` element in the component.

I use a classic .js loader, not modules. Use any script loader you like(I usee depp.js, but you can use something else). I avoid modules and module loaders on the browser. A classic loader give me nicer control of loading sequence. For example my loads are faster, I can at run-time decide what to load - and easy support legacy browsers. It gives a more polished UX.

So in the first line of the script, I define the location of my Custom Element: /custel/c-custel.js. (Normally you'd load it of a CDN(and obfuscated so page write
is focused on using it), in same way you would load a jQuery plugins).



In this case I also programmatically set an attribute - just an example.

And last lines listen to an event - that component will send.

So I hope it shows that Custom Elements are easy to use.


## Now lets look at how we write the component

```ts
   var cTemp = document.createElement('template')
   cTemp.innerHTML = `
      <b>I'm Comp DOM!</b>
      <slot></slot>
   `

   customElements.define('c-custel', class extends HTMLElement {
      sr // shadow root var
      constructor() {
         super()
         this.sr = this.attachShadow({mode: 'closed'})
         this.sr.appendChild(cTemp.content.cloneNode(true))

         this.sr.addEventListener('click', function(e) {
            console.log(e.composedPath()[0])
         })//click
         
         //example of sending message
         dispatchEvent(new CustomEvent('c-custel', { detail: {a:'b', c:'d'} }))
      }//cons

      // OFTEN you pass attributes, eg: this.getAttribute('XXX')

   })
```

So the first few lines is going to be the DOM of the new Custom Element. We have to us scripting for templates since DOM template import is deprecated.
Also, notice that we are using a ```</slot>```; so that page can send some DOM in. This is useful in cases where you want page and component to work 
together. For example I might have page have the UI of button, but the component has some choices for a quiz.

We then define the component with some constructor boiler plate code. 

I added a clicked event - handles a click on the component. Also it will dispatch an event to a page; and last lines are to receive
a message from the page scripts. 


## Notes

Writing a standard Custom Element is easy. But thinking of what would be a useful one is hard. One way to practice is to 
look at popular jQuery plugins that are heavily used - and see if you can rewrite one and have it be 
equality popular. 


## More realistic example:

- https://www.INTUITION.DEV/ex/marq
