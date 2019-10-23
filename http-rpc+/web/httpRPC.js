var httpRPC = (function () {
    function httpRPC(httpOrs, host, port) {
        this.user = '';
        this.pswd = '';
        this.token = '';
        this.httpOrs = httpOrs;
        this.host = host;
        this.port = port;
        console.log(this.httpOrs, this.host, this.port);
    }
    httpRPC.prototype.setUser = function (user, pswd) {
        this.user = user;
        this.pswd = pswd;
    };
    httpRPC.prototype.setToken = function (token) {
        this.token = token;
    };
    httpRPC.prototype.invoke = function (route, ent, method, params) {
        if (!params)
            params = {};
        params.ent = ent;
        params.method = method;
        params.user = btoa(this.user);
        params.pswd = btoa(this.pswd);
        params.token = btoa(this.token);
        var query = Object.keys(params)
            .map(function (k) { return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]); })
            .join('&');
        var THIZ = this;
        return new Promise(function (resolve, reject) {
            var url = THIZ.httpOrs + '://' + THIZ.host + (THIZ.port ? (':' + THIZ.port) : '') + '/' + route;
            url = url + '/?' + query;
            console.log(url);
            fetch(url, {
                method: 'GET',
                cache: 'default',
                redirect: 'follow',
                mode: 'cors',
                keepalive: true
            })
                .then(function (fullResp) {
                var obj = fullResp.json();
                if (!fullResp.ok)
                    reject(obj);
                else {
                    return obj;
                }
            })
                .then(function (resp) {
                if (resp.errorMessage) {
                    reject(resp);
                }
                resolve(resp.result);
            })
                .catch(function (err) {
                console.log('fetch err', err);
                reject(err);
            });
        });
    };
    httpRPC.prototype.setItem = function (key, val) {
        sessionStorage.setItem(key, val);
    };
    httpRPC.prototype.getItem = function (key) {
        return sessionStorage.getItem(key);
    };
    httpRPC.prototype.log = function (msg, level, className) {
        var THIZ = this;
        var p = {
            msg: msg,
            page: window.location.pathname,
            level: level,
            className: className
        };
        try {
            if (window.ENV)
                p['ENV'] = window.ENV;
            p['appVersion'] = btoa(navigator.appVersion);
            p['userAgent'] = btoa(navigator.userAgent);
            p['platform'] = btoa(navigator.platform);
        }
        catch (err) {
            console.trace(err);
        }
        setTimeout(function () {
            THIZ.invoke('log', 'log', 'log', p);
        }, 1);
        if (className)
            console.info(className, level, msg);
        else
            console.info(msg);
    };
    return httpRPC;
}());
