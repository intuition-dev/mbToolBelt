
const URL = require('url')

// from mbake
import { BaseRPCMethodHandler, ExpressRPC, iAuth } from './Serv'

let allowedDomains = []
allowedDomains.push('one.com') // get from config.yaml, should never be '*'
allowedDomains.push('two.org') // XXX host or local would match localhost

// makes a configured express instance
const serviceApp = new ExpressRPC()
serviceApp.makeInstance(['*'])

const handler = new BaseRPCMethodHandler()

serviceApp.routeRPC('api', 'pageOne', (req, res) => { 

   const params = URL.parse(req.url, true).query
   //console.log(params)
   const method = params.method

   if('multiply'==method) { // RPC for the page could handle several methods, eg one for each of CRUD
      let a = params.a
      let b = params.b

      const resp:any= {} // new response
      resp.result = multiply(a,b)

      handler.ret(res, resp, 4, 3)
   } else {
      const resp:any= {} // new response
      resp.errorMessage = 'mismatch'
      handler.retErr(res, resp, 4, 3)
   }

})

// should be class - maybe used by multiple routes
function multiply(a,b) {
   return a*b
}

serviceApp.handleLog(function(params) {
   console.log(params)
   console.log(params.msg)
   
})

serviceApp.listen(8888)

// example impl
class Check implements iAuth {
 
   auth(user:string, pswd:string, resp?, ctx?):Promise<string> {
      return new Promise( function (resolve, reject) {
         // check db to see if user and password match and then return level
         return resolve('OK') //or
         reject('FAIL')
      })
   }//()
  

}//class