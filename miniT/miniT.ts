
// window.ENV = '#{ENV}' //- for comps, but it is also in scope for Pug for ENV logic

class MiniT {

    _start

    constructor() {
        this._start = Date.now()
        console.log('tB')

        document.addEventListener('deviceready', this.onDOM_, false)
        document.addEventListener('DOMContentLoaded', this.onDOM_, false)

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
        console.log('DOM')
    }

    //- eg addScript('bla.js', null, 'api-key', 'key123')  so you can control your own sequence
    addScript(src, callback?, attr?, attrValue?, id?) {
        var s = document.createElement('script')
        s.setAttribute('src', src)
        if (attr) s.setAttribute(attr, attrValue)
        if (id) s.id = id
        if (callback) s.onload = callback
        s.async = true // it does it anyway, as the script is async
        document.getElementsByTagName('body')[0].appendChild(s)
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
    
}

const miniT = new MiniT()