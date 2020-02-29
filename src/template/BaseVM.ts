
declare var httpRPC
declare var depp

/**
 * Maps to the View fields and layout (minus the UI)
 */
import { EventFlux } from 'https://cdn.jsdelivr.net/gh/intuition-dev/mbToolBelt@v8.2.7/eventFlux/EventFlux.js'
new EventFlux() // makes defEventBus var

// req for rpc
import { HttpRPC } from 'https://cdn.jsdelivr.net/npm/http-rpc@2.2.6/browser/httpRPC.min.js'

export class UsersVM {

    constructor() {
        console.log('cons')
        let THIZ = this
        
        THIZ.rpc = new HttpRPC('http', 'localhost', 8888);
        THIZ.fetch('a', 1);

        defEventBus.addListener('uFetch', function(arg) {
            THIZ.fetch(arg.srch, arg.o)
        })

    }//

    fetch(srch, o) {
        var _rpcS = Date.now();
        let args = {};
        args['srch'] = srch;
        args['o'] = o;
        console.log('fetch', args);
        this.rpc.invoke('uapi', 'srch', args)
            .then(function(resp) {
                console.log('got data')
                defEventBus.dispatch('onUData', resp)
            })
    }//()


    // returns 'OK', else an error message should be shown by View|Binding
    validate():string {
       return 'OK'
    }
    
    // log. maybe remote log
    log(...a):void {

    }
     

}// class

new UsersVM()
