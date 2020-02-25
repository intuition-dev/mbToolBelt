/**
 * Maps to the View fields and layout (minus the UI)
 */
class My1VM {
    constructor() {
        this.rpc = new httpRPC('http', 'localhost', 8888);
        let THIZ = this;
        DeventBus.addListener('uFetch', function (arg) {
            THIZ.fetch(arg.srch, arg.o);
        });
    }
    fetch(srch, o) {
        var _rpcS = Date.now();
        let args = {};
        console.log('fetch', args);
        this.rpc.invoke('uapi', 'srch', args)
            .then(function (resp) {
            console.log(Date.now() - _rpcS);
            DeventBus.dispatch('onUData', resp);
        });
    } //()
    // returns 'OK', else an error message should be shown by View|Binding
    validate() {
        return 'OK';
    }
    // log. maybe remote log
    log(...a) {
    }
    genGUID() {
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
} // class
depp.require(['eventBus', 'RPC', 'trace'], function () {
    console.log('VM ready');
    new My1VM();
});
