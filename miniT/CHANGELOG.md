## 8.4.2
- EventFlux updated to flux

### 8.2.8
- libs are obfuscated
- update template for css design, w/o loadFonts
- toolBelt is now  called toolBeltLeg.js

### 8.2.4
- removed lz-string

### 8.2.3
- removed: poly+DOM, loadFonts, eventBus, disE, toolBeltDefault, httpRPC

- new RPC and FlexBus syntax:
  `import { httpRPC } from 'https://cdn.jsdelivr.net/npm/http-rpc@2.2.1/browser/httpRPC.min.js'`
  and:
  
  ```
    import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.2/eventFlux/EventFlux.min.js'
    DefEventBus.foo()
  ```

- Toolbelt is now a class: toolBelt.foo()

- fonts like this in pg/Pug: 
  `link(rel='stylesheet', href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400&display=swap")`


### 8.2.1
- Dropped es5

### 3.12.15
- vega, Design and DataTab


### 3.12.14
- web comp v 2.4 bump
- new rpc signature


### 2.11.2
- underscore added
- moved debounce and throttle to other, so you can use underscore version

### 2.10.18
- added clientjs for fingeprint
- bump rpc

### 2.10.17
- xterm

### 2.10.16
- remove riot and fire from other.js
- moved vega to other js

### 2.10.12
- RPC bump
- changed name of repo to mbToolBelt
- FontsLoaded is now eventBus event, not depp

### 1.10.8
- added Event Bus: https://github.com/theiconic/event-bus

### 1.10.5
- element-closest instead of v3

### 1.10.4
- added extra step step for polyIO
- ie 11 tests

### 1.10.2
- moved zebra time to other
- bump firestore ver in other js
- added instantpage, loaded by toolDefault auto
- changed order: webloader first, then poly

### 1.9.30
- fixed tabulator_core url

### 1.9.29
- put fuse back
- put fetchItems back

###  1.9.23
- moved tabulator to other.js
- add vanilla table
- added Binding in mbake -f
- remove poly-core-req and poly-custel depp, use poly

###  1.9.21
- changed evens to be polly.IO. Check source for features!
- rpc.js

###  1.9.20
- moved data methods to ViewModel, -f

###  1.9.19
- change to src
- moved bs to ds
- moved picker date time to other
- added time ago
- moved CSS to intuDS
- added object fit CSS

###  1.9.15
- breaking change loadFonts() now takes an array [] as arg, not string
- lz-string, snap.svg added

### 1.9.15
- reqAniOnce

### 1.9.12
- req() renamed to imp() short for import

### 1.9.7
- moved fetchItems to other
- moved vex alert to other.js. Use native dialog instead
- added minCss framework
- renamed to debugCSS

### 1.9.3
- updated `uppy` file uploader version to 1.4.0
- added support for native dialog

### 1.9.1
- removed auto load, now only poly are auto loaded. You must manually ask for toolBeltDefault() 

### 1.9.0
- move bsjs to other
- bump split version
- add modal lib
- add yaml lib


### 1.8.31
- removed `vega-lite.js` unused library

### 1.8.30
- remove font awesome due to CSS jump
- improve animation detection
- delay fonts a bit more

### 1.8.23
- moved fuse FTS to other
- moved GSAP to other
- moved axios to other
- simplify poly for ie11

### 1.8.22
- tabulator from 4.2.7 4.4.1
- moved firebase and riot and supporting libs to other.js

###  1.8.14
- renamed comps to custel
- bs to use sans serif
- removed dot.js
- load mustache automatically on DOM, for example can be used in items
- poly-custel is now poly-custel
- font loader waits on 'poly-custel', 'poly'
- components renamed from wcomp to custel

### 1.2.3
- jquery slim again
- fix RPC: toolbelt was loading old
- fix Bootstrap: font and jubmo

### 1.2.1
- update firebase
- change repo
- remove snip cart


