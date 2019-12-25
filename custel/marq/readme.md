# Marquee Custom Element, with Web Animations API

This 'realistic' Marquee component is animating, and can be less than _12kB_ to download! This is
because it is 
leveraging browser's built in Custom Element and browser's built in Web Animations API - so there is
not much to download other than the component itself.

So it will be displayed to the end users very quickly.

<img src="img.png" width="100%"/>

- Live [_DEMO_](http://www.INTUITION.DEV/ex/marq)

Check it out w/ Developer Tools, including the Network Tab 'Waterfall' and set to 4g(mobile).

#### Please star our main project here:
- https://github.com/INTUITION-dev/INTU

### 'Realistic'

This example is of a realistic component. Often times you find Web Components on www that are just a button. 
In addition, it is high performance: it loads very quickly.

It has become clear that React, Angular, Vue and such are on their way out, after about a decade of .js wars: to be related by the built in 
native custom elements. 

How to use on a page:
```
    let t = document.getElementById('marq')
    t.addOne('1. Lorem ipsum dolor sit amet1', 'http://google.com')
    t.addOne('2. Lorem ipsum dolor sit amet', 'http://yahoo.com')
```

### Blue collar

I normally split the front end team into two teams. A white collar team would use the components.
And a blue collar team that supports them, for example they write and CDN host the components. The code for components is here:
- https://github.com/INTUITION-dev/mbToolBelt/tree/master/custel/marq/marq-custel

### Aside

- the min.js is obfuscated, sometimes that comes in handy.
- If data binding is needed, I use the 3kB Mustache library - because it is also use by AMP.
- I'd love to know if someone can make a realist component with similar high performance: first meaningful paint.

### Deeper dive
-  A gentler intro to [Standard Custom Elements](http://github.com/INTUITION-dev/mbToolBelt/tree/master/custel/custel1)
- [Intro to Web Animation API](WebAni.md)
- We use this approach to loading: [Lazy Loading ](http://lazy.metabake.net)


## Questions?
- http://forum.metabake.net