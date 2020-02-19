// All rights reserved by INTUITION.DEV |  Cekvenich, licensed under GPL-3.0-only

// Requires jQuery, Axios

declare let $: any
declare let axios: any

console.info('spa router')

class SPArouter {
   static isFile
   constructor() { }

   static zone = '#router' //the content in your layout. The rest should be app shell from PWA.

   static NavSTART = '_nav-start'
   static NavDONE = '_nav-loaded'
   static ERR = '_nav-ERR'

   static loadHtml(toHref, fromHref, back_) { //triggered, but function can be called directly also
      if (!back_) {
         try {
            history.pushState({ url: toHref }, '', toHref)
         } catch (err) { console.info('no push state on file//') }
      }

      //fire NAV event
      SPArouter.disE({ type: SPArouter.NavSTART, toHref: toHref, fromHref: fromHref, back: back_ })

      let url = toHref //SPArouter.appendQueryString(toHref, { 'SPArouter': "\"" + SPArouter.zone + "\"" })

      console.info(url)

      //   credentials: 'same-origin' 
      axios.get(url).then(function (txt) {
         let $html = $('<html></html>').append($(txt.data))
         let title = $html.find('title').first().text()
         document.title = title

         let newContent = $html.find(SPArouter.zone).html()
         //console.info(newContent)

         //fire new PAGE received event
         SPArouter.fROOTfix();
         SPArouter.disE({ type: SPArouter.NavDONE, toHref: toHref, fromHref: fromHref, newContent: newContent, $html: $html, back: back_ })

      }).catch(function (er) {
         console.info('error', er)
         SPArouter.disE({ type: SPArouter.ERR, err: er })
      })
   }//()

   static appendQueryString(url, queryVars) {
      let firstSeparator = (url.indexOf('?') == -1 ? '?' : '&')
      let queryStringParts = new Array()
      for (let key in queryVars) {
         try {
            queryStringParts.push(key + '=' + queryVars[key])
         } catch (err) { console.info('q', err) }
      }
      let queryString = queryStringParts.join('&')
      return url + firstSeparator + queryString;
   }

   static disE(msg) {
      setTimeout(function () {
         dispatchEvent(new CustomEvent('nav', { detail: msg }))
      }, 1)
   }

   static checkPlatform() {
      var native = false;

      if (document.URL.indexOf('http://') === -1
         && document.URL.indexOf('https://') === -1) {
         native = true;
      }

      var isFile = window.location.protocol == 'file:';

      if (isFile || native) {// for electron | build.phonegap, checks if running in real browser from http server 
         try {
            window.nodeRequire = require
            delete window.require
            delete window.exports
            delete window.module
            console.log('fixed for non http/native')
         } catch (err) { }
      }

      SPArouter.isFile = native || isFile;

      if (SPArouter.isFile) {
         SPArouter.watchATags();
      }
   }

   static fROOTfix() {  //
      if (SPArouter.isFile) {
         $('a').each(function (index, value) {
            
            let hasQuery = this.href.includes('?');
            let hasAnchor = this.href.includes('#');
            
            if (this.href.includes('index.html')) return; // continue
            
            let splitSymbol = hasQuery ? '?' : (hasAnchor ? '#' : null);
            
            
            const urlParts = this.href.split(splitSymbol);
            
            if (urlParts[0].slice(-1) == '/') {
               $(this).attr('href', urlParts[0] + 'index.html' + (splitSymbol ? splitSymbol + urlParts[1] : ''));
            } else {
               $(this).attr('href', urlParts[0] + '/index.html' + (splitSymbol ? splitSymbol + urlParts[1] : ''));
            }
         })
      }
   }//()

   static watchATags() {
      const target = document.querySelector('body');
      let debounce;

      const config = {
         childList: true,
         subtree: true
      };

      function subscriber(mutations) {
         mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
               clearTimeout(debounce);

               debounce = setTimeout(() => {
                  console.log('mutation')
                  SPArouter.fROOTfix();
               }, 0);
            }
         });
      }

      const observer = new MutationObserver(subscriber);
      observer.observe(target, config);
   }

   static init(foo) {
      SPArouter.checkPlatform();
      addEventListener('nav', foo)

      $(window).on('popstate', function (e) {//back/forward button
         //console.info(' popstate' + e.originalEvent.state)
         let state = e.originalEvent.state
         if (state !== null) {
            e.preventDefault()
            let oldUrl = sessionStorage.getItem('oldUrl')
            sessionStorage.setItem('oldUrl', state.url)
            SPArouter.loadHtml(state.url, oldUrl, true)
         }
      })

      $(document).on('click', 'a', function (e) { //over-ride links
         let anchor = $(e.currentTarget)
         let href = anchor.prop('href')
         console.info(href)
         if (!href || href.length < 1) {
            return
         }
         if (anchor.is('.norouter'))
            return

         //else:
         e.preventDefault()
         let fromHref = window.location.href
         sessionStorage.setItem('oldUrl', href)
         SPArouter.loadHtml(href, fromHref, null)
      })

      let pg = window.location.href
      try {
         history.pushState({ url: pg }, '', pg)
      } catch (err) { console.info('no push state on file//', err) }
      sessionStorage.setItem('oldUrl', pg)
   }// init

} // class


/*
EXAMPLE:
SPArouter.init(onNavigate);
// call the FSM state machine
function onNavigate (evt) { // this acts as the controller
   if (evt.detail.type == SPArouter.NavSTART) { //start
      //$('#router').fadeTo(100,.2);
   }
   else if (evt.detail.type == SPArouter.NavDONE) {
      $(SPArouter.zone).html(evt.detail.newContent);
      //$('#router').fadeTo(100,1);
      window.scrollTo(0, 0);
   }
}
*/
