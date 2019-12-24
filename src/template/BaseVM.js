var My1VM = (function () {
    function My1VM() {
        this.rpc = new httpRPC('http', 'localhost', 8888);
        var THIZ = this;
        DeventBus.addListener('uFetch', function (arg) {
            THIZ.fetch(arg.srch, arg.o);
        });
    }
    My1VM.prototype.fetch = function (srch, o) {
        var _rpcS = Date.now();
        var args = {};
        console.log('fetch', args);
        this.rpc.invoke('uapi', 'srch', args)
            .then(function (resp) {
            console.log(Date.now() - _rpcS);
            DeventBus.dispatch('onUData', resp);
        });
    };
    My1VM.prototype.validate = function () {
        return 'OK';
    };
    My1VM.prototype.log = function () {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
    };
    My1VM.prototype.genGUID = function () {
        var d = new Date().getTime();
        if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
            d += performance.now();
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    My1VM.removeAllStore = function () {
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
                }
                d.shift();
            }
        }
        localStorage.clear();
        sessionStorage.clear();
    };
    return My1VM;
}());
depp.require(['eventBus', 'RPC', 'trace'], function () {
    console.log('VM ready');
    new My1VM();
});
