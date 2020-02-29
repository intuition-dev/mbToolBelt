/**
 * Maps to the View fields and layout (minus the UI)
 */
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.7/eventFlux/EventFlux.js';
new EventFlux(); // makes defEventBus var
// req for rpc
import { HttpRPC } from 'https://cdn.jsdelivr.net/npm/http-rpc@2.2.6/browser/httpRPC.min.js';
export class UsersVM {
    constructor() {
        console.log('cons');
        let THIZ = this;
        THIZ.rpc = new HttpRPC('http', 'localhost', 8888);
        THIZ.fetch('a', 1);
        defEventBus.addListener('uFetch', function (arg) {
            THIZ.fetch(arg.srch, arg.o);
        });
    } //
    fetch(srch, o) {
        var _rpcS = Date.now();
        let args = {};
        args['srch'] = srch;
        args['o'] = o;
        console.log('fetch', args);
        this.rpc.invoke('uapi', 'srch', args)
            .then(function (resp) {
            console.log('got data');
            defEventBus.dispatch('onUData', resp);
        });
    } //()
    // returns 'OK', else an error message should be shown by View|Binding
    validate() {
        return 'OK';
    }
    // log. maybe remote log
    log(...a) {
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
} // class
new UsersVM();
