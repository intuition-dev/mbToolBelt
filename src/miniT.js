// window.ENV = '#{ENV}' //- for comps, but it is also in scope for Pug for ENV logic
class MiniT {
    constructor() {
        this._start = Date.now();
        console.log('tB');
        document.addEventListener('deviceready', this.onDOM_, false);
        document.addEventListener('DOMContentLoaded', this.onDOM_, false);
    }
    supportsES6() {
        try {
            new Function("(a = 0) => a");
            return true;
        }
        catch (err) {
            return false;
        }
    }
    onDOM_() {
        console.log('DOM');
    }
    //- eg addScript('bla.js', null, 'api-key', 'key123')  so you can control your own sequence
    addScript(src, callback, attr, attrValue, id) {
        var s = document.createElement('script');
        s.setAttribute('src', src);
        if (attr)
            s.setAttribute(attr, attrValue);
        if (id)
            s.id = id;
        if (callback)
            s.onload = callback;
        s.async = true; // it does it anyway, as the script is async
        document.getElementsByTagName('body')[0].appendChild(s);
    }
    fetchItems(items) {
        return new Promise(function (resolve, reject) {
            fetch(items, {
                cache: 'default',
                keepalive: true
            }).then(function (fullResp) {
                if (!fullResp.ok)
                    reject(fullResp.statusText);
                return fullResp.json();
            }).then(function (obj) {
                //'prefix' add
                var item = obj.items;
                var len = item.length;
                for (var i = 0; i < len; i++)
                    item[i]['prefix'] = obj.prefix;
                console.log(obj.items);
                resolve(obj);
            })
                .catch(function (err) {
                console.log(err);
                reject(err);
            });
        }); //pro
    } //()
    // get style value
    getStyle(el, styleProp) {
        var y;
        if (el.currentStyle)
            y = el.currentStyle[styleProp];
        else if (window.getComputedStyle)
            y = document.defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
        return y;
    }
    getUrlVars() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }
    static genGUID() {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }
    static removeAllStore() {
        var cookies = document.cookie.split("; ");
        for (var c = 0; c < cookies.length; c++) {
            var d = window.location.hostname.split(".");
            while (d.length > 0) {
                var cookieBase = encodeURIComponent(cookies[c].split(";")[0].split("=")[0]) + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' + d.join('.') + ' ;path=';
                var p = location.pathname.split('/');
                document.cookie = cookieBase + '/';
                while (p.length > 0) {
                    document.cookie = cookieBase + p.join('/');
                    p.pop();
                } //inner while
                d.shift();
            } //while
        } //for
        localStorage.clear();
        sessionStorage.clear();
    } //()
}
const miniT = new MiniT();
