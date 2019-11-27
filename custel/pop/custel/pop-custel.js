var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
depp.require(['poly', 'js-yaml', 'jquery', 'split', 'listjs', 'DOM', 'dialogOK'], function () {
    console.log('loading');
    var CustelsListVM = (function () {
        function CustelsListVM(sr) {
            CustelsListVM.sr = sr;
            Split([sr.querySelector('#popLeft'), sr.querySelector('#popRight')], { sizes: [32, 68] });
            CustelsListVM.dat();
            var left = CustelsListVM.sr.getElementById('custLst');
            left.addEventListener('click', CustelsListVM.onLeftClick);
            var paste = CustelsListVM.sr.getElementById('paste');
            paste.addEventListener('click', CustelsListVM.paste);
        }
        CustelsListVM.paste = function () {
            var bot = CustelsListVM.sr.getElementById('popBot');
            disE('POP-CUSTEL', bot.innerText);
            setTimeout(function () {
                CustelsListVM.sr.querySelector('#dialog1').close();
            }, 1000 / 30);
        };
        CustelsListVM.fetchCode = function (custel) {
            return new Promise(function (resolve, reject) {
                var path = CustelsListVM.root + custel + '/code.pug';
                console.log(path);
                fetch(path, {
                    cache: 'default',
                    keepalive: true
                }).then(function (fullResp) {
                    if (!fullResp.ok)
                        reject(fullResp.statusText);
                    resolve(fullResp.text());
                })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        };
        CustelsListVM.fetchCustels = function () {
            return new Promise(function (resolve, reject) {
                fetch(CustelsListVM.root + '/custels.yaml', {
                    cache: 'default',
                    keepalive: true
                }).then(function (fullResp) {
                    if (!fullResp.ok)
                        reject(fullResp.statusText);
                    return fullResp.text();
                }).then(function (ys) {
                    var y = jsyaml.safeLoad(ys);
                    resolve(y);
                })
                    .catch(function (err) {
                    console.log(err);
                    reject(err);
                });
            });
        };
        CustelsListVM.dat = function () {
            console.log('dat');
            var pro = CustelsListVM.fetchCustels();
            pro.then(function (dat) {
                CustelsListVM.onData(dat.els);
            });
        };
        CustelsListVM.onData = function (data) {
            var options = {
                valueNames: ['desc', { data: ['name'] }],
                item: "<tr data-name> \n                     <td class=\"desc\"></td>\n                   </tr>"
            };
            var custListEl = CustelsListVM.sr.getElementById('custLst');
            CustelsListVM.custelList = new List(custListEl, options, data);
        };
        CustelsListVM.onLeftClick = function (el) {
            var selector = 'tr';
            var iel = el.target.closest(selector);
            if (!iel)
                return;
            var id = iel.getAttribute('data-name');
            console.log(id);
            var proB = CustelsListVM.fetchCode(id);
            CustelsListVM.setText(proB);
        };
        CustelsListVM.setText = function (proBot) {
            var bot = CustelsListVM.sr.getElementById('popBot');
            proBot.then(function (res) {
                bot.innerText = res;
            });
        };
        CustelsListVM.root = 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v3.11.15/custel/';
        return CustelsListVM;
    }());
    var cTemp = document.createElement('template');
    cTemp.innerHTML = "\n<style>:host {\n    all: initial;\n    display: block;\n    contain: content;\n\n}</style>\n\n<link rel = \"stylesheet\"\n    type = \"text/css\"\n    href = \"https://cdn.jsdelivr.net/gh/intuition-dev/intuDS@v1.0.4/src/css/main.css\" />\n\n<a id=\"pop1\" href=\"#pop\" rel=\"modal:open\" class=\"btn btn-b btn-sm\">Pop Custom</a>\n\n<style>\n\n#dialog1 {\n    width: 800px;\n    height: 450px;\n}\n\n#custLst {\n    max-width: 300px;\n}\n\n.gutter {\n    background-color: #eee;\n    background-repeat: no-repeat;\n    background-position: 50%;\n}\n.gutter.gutter-horizontal {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');\n    cursor: col-resize;\n}\n.gutter.gutter-vertical {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=');\n    cursor: row-resize;\n}\n.split {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    overflow-y: auto;\n    overflow-x: hidden;\n    background-color: #fff;\n}\n.split, .gutter.gutter-horizontal {\n    float: left;\n    height: 360px;\n}\n.gutter.gutter-horizontal {\n    cursor: ew-resize;\n}\n</style>\n\n<dialog id=\"dialog1\">\n    <p>Select Element:</p>\n    <hr>\n\n    <div class=\"split\" id=\"popLeft\">\n        <div id=\"custLst\">\n            <input class=\"search smooth\" placeholder=\"Search\"/>\n            <button class=\"sort btn btn-a btn-sm\" data-sort=\"name\">Sort</button>\n            <hr>\n            <table class=\"table\">\n                <thead>\n                    <tr><th>Elements</th></tr>\n                </thead>\n                <tbody class=\"list\">\n                </tbody>\n            </table>\n        </div>\n    </div>\n    \n    <div class=\"split\" id=\"popRight\">\n        <pre><div id=\"popBot\"></div></pre>\n    </div>\n\n   <hr/>\n   <button id=\"close1\" class=\"btn btn-a btn-sm\" >Close</button>\n   <button id=\"paste\"  class=\"btn btn-b btn-sm\">Paste</button>\n</dialog>\n";
    window.customElements.define('pop-custel', (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            console.log('cons');
            _this.sr = _this.attachShadow({ mode: 'closed' });
            _this.sr.appendChild(cTemp.content.cloneNode(true));
            _this.vm = new CustelsListVM(_this.sr);
            var THIZ = _this;
            var pop = _this.sr.querySelector('#pop1');
            THIZ.dialog = THIZ.sr.querySelector('#dialog1');
            pop.addEventListener('click', function (e) {
                THIZ.dialog.showModal();
            });
            var close = _this.sr.querySelector('#close1');
            close.addEventListener('click', function (e) {
                THIZ.dialog.close();
            });
            return _this;
        }
        return class_1;
    }(HTMLElement)));
});
