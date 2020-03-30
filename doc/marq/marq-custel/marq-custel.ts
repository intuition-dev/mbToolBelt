declare var depp: any

var cTemp = document.createElement('template')
cTemp.innerHTML = `
      <div class="marq">
         <div class="marq-wrapper">
            <ul class="marq-track">
            </ul>
         </div>   
      </div>

      <style>
      .marq {
         white-space: nowrap;
         margin: 0;
         margin-left: -0px;
         min-width: 100vw;
         overflow: hidden;
         height: 40px;
         position: relative;
         cursor: pointer;
         font-family: Open Sans;
         font-weight: 300;
         width: 100%;
      }
      .marq-wrapper {
         position: absolute;
         left: 0;
         top: 0;
         width: 100%;
         height: 100%;
      }
      
      /* ul block with items inside */
      .marq-track {
         /* transform this one in js via .animate
         */
         position: absolute;
         left: 0;
         top: 0;
         width: auto;
         list-style: none;
         display: flex;
         margin: 0;
         padding: 0;
         font-size: 14px;
         height: 100%;
         align-items: center;
      }
      .marq-track-2 {
         transform: translateX(100%)
      }
      .marq-track li {
         margin: 0 5px;
         width: 300px;
         padding: 0 10px;
         height: 100%;
         display: inline;
         align-items: center;
         background: #2a93d5;
         position: relative;
         text-overflow: ellipsis;
         overflow: hidden;
         white-space: nowrap;
         color: white;
         border-radius: 40px
         
      }
      .marq-track li:hover {
         background: #135589;
      }
      .marq-track li a {
         text-decoration: none;
         color: white;
         line-height: 40px;
         
      }
      .marq-track li a:hover {
         text-decoration: none;
         color: white;
      }
      </style>
   `

customElements.define('marq-custel', class extends HTMLElement {
   sr // shadow root var
   index: number = 0
   constructor() {
      super()

      //create shadow element
      let _this = this
      this.sr = this.attachShadow({ mode: 'open' })
      this.sr.appendChild(cTemp.content.cloneNode(true))

      //create clone of the ul so we can animated later
      const ul2 = document.createElement('ul')
      ul2.classList.add('marq-track')
      ul2.classList.add('marq-track-2')
      this.sr.querySelector('.marq-wrapper').appendChild(ul2)

   }//cons


   //add li items to the stack
   addOne(str, url) {
      const _this = this
      const el = document.createElement('li')

      el.setAttribute('data-index', '' + this.index) //set index to each li, so we can move element to the back once its hidden
      el.innerHTML = '<a href=' + url + '>' + str + '</a>'

      const el2 = el.cloneNode(true)
      let ul = this.sr.querySelector('.marq-track')
      const ul2 = this.sr.querySelector('.marq-track-2')
      ul.appendChild(el)
      ul2.appendChild(el2) //clone elements to use in animation
      this.index++
      _this._marq()
   }

   removeAll() {
      const _this = this

      const marqTrack = _this.sr.querySelector('.marq-track').children //there 2 of them
      const marqTrack2 = _this.sr.querySelector('.marq-track-2').children //there 2 of them

      while (marqTrack.length) {
         var i = 0
         marqTrack[i].remove()
         i++
      }
      while (marqTrack2.length) {
         var i = 0
         marqTrack2[i].remove()
         i++
      }
   }

   _marq() {
      let _this = this

      var animated_obj_1 = _this.sr.querySelector('.marq-track')
      var animated_obj_2 = _this.sr.querySelector('.marq-track-2')

      var d = animated_obj_1.clientWidth //width of the animated block

      //animation duration
      /*
      time = px / desired pixels per second, 
      So, if the animation covers 200px and the desired speed is 100px per sec, then:
      time = 200px / 100px = 2 sec = 2000,
      */
      var time = (d / 30) * 1000

      var trans = [
         { transform: 'translateX(' + d + 'px)' },
         { transform: 'translateX(-' + d + 'px)' },
      ]
      var timing = {
         duration: time,
         iterations: Infinity,
         iterationStart: .5, //offset into the first run of the animation at which to begin the animation;
         //0.5 would start the animation halfway through its first iteration or loop
      }
      var animatedTrack = animated_obj_1.animate(trans, timing)
      console.log("_marq -> animatedTrack", animatedTrack)

      var animatedTrack_2 = animated_obj_2.animate([
         { transform: 'translateX(' + d + 'px)' },
         { transform: 'translateX(-' + d + 'px)' }
      ], {
            duration: time,
            iterations: Infinity,
         })

      _this.sr.addEventListener('mouseover', function (e) {
         animatedTrack.pause()
         animatedTrack_2.pause()
      })
      _this.sr.addEventListener('mouseout', function (e) {
         animatedTrack.play()
         animatedTrack_2.play()
      })


   }//()

})//custel






