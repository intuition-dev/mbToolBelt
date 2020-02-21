declare var jsyaml: any
declare var List: any
declare var $: any
declare var Split: any
declare var depp: any

//closure
depp.require(['poly', 'js-yaml', 'jquery', 'split', 'listjs', 'DOM', 'dialogOK'], function () {

    console.log('loading')

    // VM //////////////////////////////////////////////////////////////////////////////////////////
    class CustelsListVM { // requires poly.  

        static root: string = 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.0/custel/'

        static sr

        constructor(sr) {
            CustelsListVM.sr = sr

            Split([sr.querySelector('#popLeft'), sr.querySelector('#popRight')]
                , { sizes: [32, 68] })

            CustelsListVM.dat()

            var left = CustelsListVM.sr.getElementById('custLst')
            left.addEventListener('click', CustelsListVM.onLeftClick)

            var paste = CustelsListVM.sr.getElementById('paste')
            paste.addEventListener('click', CustelsListVM.paste)

        }//()

        static paste() {
            let bot = CustelsListVM.sr.getElementById('popBot')

            disE('POP-CUSTEL', bot.innerText)

            setTimeout(function () {
                CustelsListVM.sr.querySelector('#dialog1').close()
            }, 1000 / 30)
        }//()

        static fetchCode(custel) {
            return new Promise(function (resolve, reject) {
                const path = CustelsListVM.root + custel + '/code.pug'
                console.log(path)
                fetch(path, {
                    cache: 'default',
                    keepalive: true
                }).then(function (fullResp) {
                    if (!fullResp.ok)
                        reject(fullResp.statusText)
                    resolve(fullResp.text())
                })
                    .catch(function (err) {
                        console.log(err)
                        reject(err)
                    })
            })//pro
        }//()

        static fetchCustels() {
            return new Promise(function (resolve, reject) {
                fetch(CustelsListVM.root + '/custels.yaml', {
                    cache: 'default',
                    keepalive: true
                }).then(function (fullResp) {
                    if (!fullResp.ok)
                        reject(fullResp.statusText)
                    return fullResp.text()
                }).then(function (ys) {
                    let y = jsyaml.safeLoad(ys)
                    resolve(y)
                })
                    .catch(function (err) {
                        console.log(err)
                        reject(err)
                    })
            })//pro
        }

        static dat() {
            console.log('dat')
            let pro = CustelsListVM.fetchCustels()
            pro.then(function (dat: any) {
                //console.log(dat)                
                CustelsListVM.onData(dat.els)
            })
        }//()

        static custelList

        static onData(data) {
            var options = {
                valueNames: ['desc', { data: ['name'] }],
                item: `<tr data-name> 
                     <td class="desc"></td>
                   </tr>`
            }

            let custListEl = CustelsListVM.sr.getElementById('custLst')

            CustelsListVM.custelList = new List(custListEl, options, data)
        }//()

        static onLeftClick(el) {
            const selector = 'tr'
            var iel = el.target.closest(selector)
            if (!iel) return

            var id = iel.getAttribute('data-name')
            console.log(id)

            let proB = CustelsListVM.fetchCode(id)

            CustelsListVM.setText(proB)
        }//()

        static setText(proBot) {

            let bot = CustelsListVM.sr.getElementById('popBot')

            proBot.then(function (res) {
                bot.innerText = res
            })

        }//()

    }//class

    // custel ////////////////////////////////////////////////////////////////////////////////////////// https://cdn.jsdelivr.net/gh/INTUITION-dev/intuDesignWork@v1.0.5/src/css/main.css
    var cTemp = document.createElement('template')
    cTemp.innerHTML = `
<style>:host {
    all: initial;
    display: block;
    contain: content;

}</style>

<link rel = "stylesheet"
    type = "text/css"
    href = "https://cdn.jsdelivr.net/gh/INTUITION-dev/intuDesignWork@v1.0.5/src/css/main.css" />

<a id="pop1" href="#pop" rel="modal:open" class="btn btn-b btn-sm">Pop Custom</a>

<style>

#dialog1 {
    width: 800px;
    height: 450px;
}

#custLst {
    max-width: 300px;
}

.gutter {
    background-color: #eee;
    background-repeat: no-repeat;
    background-position: 50%;
}
.gutter.gutter-horizontal {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
    cursor: col-resize;
}
.gutter.gutter-vertical {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');
    cursor: row-resize;
}
.split {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    overflow-y: auto;
    overflow-x: hidden;
    background-color: #fff;
}
.split, .gutter.gutter-horizontal {
    float: left;
    height: 360px;
}
.gutter.gutter-horizontal {
    cursor: ew-resize;
}
</style>

<dialog id="dialog1">
    <p>Select Element:</p>
    <hr>

    <div class="split" id="popLeft">
        <div id="custLst">
            <input class="search smooth" placeholder="Search"/>
            <button class="sort btn btn-a btn-sm" data-sort="name">Sort</button>
            <hr>
            <table class="table">
                <thead>
                    <tr><th>Elements</th></tr>
                </thead>
                <tbody class="list">
                </tbody>
            </table>
        </div>
    </div>
    
    <div class="split" id="popRight">
        <pre><div id="popBot"></div></pre>
    </div>

   <hr/>
   <button id="close1" class="btn btn-a btn-sm" >Close</button>
   <button id="paste"  class="btn btn-b btn-sm">Paste</button>
</dialog>
`

    window.customElements.define('pop-custel', class extends HTMLElement {
        sr // shadow root var
        vm: CustelsListVM
        dialog
        constructor() {
            super()
            console.log('cons')

            this.sr = this.attachShadow({ mode: 'closed' })
            this.sr.appendChild(cTemp.content.cloneNode(true))

            this.vm = new CustelsListVM(this.sr)

            let THIZ = this
            let pop = this.sr.querySelector('#pop1')
            THIZ.dialog = THIZ.sr.querySelector('#dialog1')
            pop.addEventListener('click', function (e) {
                //console.log(e.composedPath()[0])
                THIZ.dialog.showModal()
            })//click
            let close = this.sr.querySelector('#close1')
            close.addEventListener('click', function (e) {
                THIZ.dialog.close()
            })//click

        }//cons    

    })//custel

})//depp closure