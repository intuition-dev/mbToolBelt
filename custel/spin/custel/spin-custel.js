depp.require(['DOMDelayed'], function () {
    var cTemp = document.createElement('template');
    cTemp.innerHTML = `
<div class="spin-modal" id="spin1" >
   <div class="spin-modal-con">
   <div class="spinner"></div>
   </div>
</div>

<style>

html{line-height:1.15;-webkit-text-size-adjust:100%;}
body{margin:0;}
main{display:block;}
b,strong{font-weight:bolder;}
[hidden]{display:none;}
.spin-modal{position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;pointer-events:none;-webkit-transition:all 2s;transition:all 2s;background-color:rgba(0,0,0,0.3);}
.spin-modal-con{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:70%;}
.spinner{border:4px solid white;border-top:4px solid black;border-radius:50%;width:30px;height:30px;-webkit-animation:spin .8s linear infinite;animation:spin .8s linear infinite;}
@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}
 100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}
@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg);}
 100%{-webkit-transform:rotate(360deg);transform:rotate(360deg);}}

</style>
`;
    console.log('loaded');
    window.customElements.define('spin-custel', class extends HTMLElement {
        constructor() {
            super();
            console.log('CONS');
            this.sr = this.attachShadow({ mode: 'open' });
            this.sr.appendChild(cTemp.content.cloneNode(true));
            this.tmpl = cTemp.innerHTML;
            const THIZ = this;
            addEventListener('spin-start', function (e) {
                THIZ.spin();
            });
            addEventListener('spin-stop', function (e) {
                THIZ.stop();
            });
        }
        spin() {
            const THIZ = this;
            console.log('spin');
            this.sr.innerHTML = this.tmpl;
        }
        stop() {
            const THIZ = this;
            reqAnif(function () {
                console.log('stop?');
                THIZ.sr.innerHTML = '';
            });
        }
    });
});
