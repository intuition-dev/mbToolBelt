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
var cTemp = document.createElement('template');
cTemp.innerHTML = "\n      <div class=\"marq\">\n         <div class=\"marq-wrapper\">\n            <ul class=\"marq-track\">\n            </ul>\n         </div>   \n      </div>\n\n      <style>\n      .marq {\n         white-space: nowrap;\n         margin: 0;\n         margin-left: -0px;\n         min-width: 100vw;\n         overflow: hidden;\n         height: 40px;\n         position: relative;\n         cursor: pointer;\n         font-family: Open Sans;\n         font-weight: 300;\n         width: 100%;\n      }\n      .marq-wrapper {\n         position: absolute;\n         left: 0;\n         top: 0;\n         width: 100%;\n         height: 100%;\n      }\n      \n      /* ul block with items inside */\n      .marq-track {\n         /* transform this one in js via .animate\n         */\n         position: absolute;\n         left: 0;\n         top: 0;\n         width: auto;\n         list-style: none;\n         display: flex;\n         margin: 0;\n         padding: 0;\n         font-size: 14px;\n         height: 100%;\n         align-items: center;\n      }\n      .marq-track-2 {\n         transform: translateX(100%)\n      }\n      .marq-track li {\n         margin: 0 5px;\n         width: 300px;\n         padding: 0 10px;\n         height: 100%;\n         display: inline;\n         align-items: center;\n         background: #2a93d5;\n         position: relative;\n         text-overflow: ellipsis;\n         overflow: hidden;\n         white-space: nowrap;\n         color: white;\n         border-radius: 40px\n         \n      }\n      .marq-track li:hover {\n         background: #135589;\n      }\n      .marq-track li a {\n         text-decoration: none;\n         color: white;\n         line-height: 40px;\n         \n      }\n      .marq-track li a:hover {\n         text-decoration: none;\n         color: white;\n      }\n      </style>\n   ";
window.customElements.define('marq-custel', (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        var _this_1 = _super.call(this) || this;
        _this_1.index = 0;
        var _this = _this_1;
        _this_1.sr = _this_1.attachShadow({ mode: 'closed' });
        _this_1.sr.appendChild(cTemp.content.cloneNode(true));
        var ul2 = document.createElement('ul');
        ul2.classList.add('marq-track');
        ul2.classList.add('marq-track-2');
        _this_1.sr.querySelector('.marq-wrapper').appendChild(ul2);
        return _this_1;
    }
    class_1.prototype.addOne = function (str, url) {
        var _this = this;
        var el = document.createElement('li');
        el.setAttribute('data-index', '' + this.index);
        el.innerHTML = '<a href=' + url + '>' + str + '</a>';
        var el2 = el.cloneNode(true);
        var ul = this.sr.querySelector('.marq-track');
        var ul2 = this.sr.querySelector('.marq-track-2');
        ul.appendChild(el);
        ul2.appendChild(el2);
        this.index++;
        _this._marq();
    };
    class_1.prototype.removeAll = function () {
        var _this = this;
        var marqTrack = _this.sr.querySelector('.marq-track').children;
        var marqTrack2 = _this.sr.querySelector('.marq-track-2').children;
        while (marqTrack.length) {
            var i = 0;
            marqTrack[i].remove();
            i++;
        }
        while (marqTrack2.length) {
            var i = 0;
            marqTrack2[i].remove();
            i++;
        }
    };
    class_1.prototype._marq = function () {
        var _this = this;
        var animated_obj_1 = _this.sr.querySelector('.marq-track');
        var animated_obj_2 = _this.sr.querySelector('.marq-track-2');
        var d = animated_obj_1.clientWidth;
        var time = (d / 30) * 1000;
        var trans = [
            { transform: 'translateX(' + d + 'px)' },
            { transform: 'translateX(-' + d + 'px)' },
        ];
        var timing = {
            duration: time,
            iterations: Infinity,
            iterationStart: .5,
        };
        var animatedTrack = animated_obj_1.animate(trans, timing);
        console.log("_marq -> animatedTrack", animatedTrack);
        var animatedTrack_2 = animated_obj_2.animate([
            { transform: 'translateX(' + d + 'px)' },
            { transform: 'translateX(-' + d + 'px)' }
        ], {
            duration: time,
            iterations: Infinity,
        });
        _this.sr.addEventListener('mouseover', function (e) {
            animatedTrack.pause();
            animatedTrack_2.pause();
        });
        _this.sr.addEventListener('mouseout', function (e) {
            animatedTrack.play();
            animatedTrack_2.play();
        });
    };
    return class_1;
}(HTMLElement)));
