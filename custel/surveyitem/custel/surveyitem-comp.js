
riot.tag2('surveyitem-comp', '<div>{question}</div><br> <div></div><virtual each="{items}"> <div class="pretty p-default p-round p-pulse p-bigger"> <input type="radio" riot-value="{choice}" name="{name}"> <div class="state p-primary"> <label>{choice}</label> </div> </div><br><br></virtual> <yield></yield><br>', '', '', function(opts) {
    var THIZ = this
    console.log('ENV',window.ENV)

    this.on('mount', function() {

       console.log('mounted')
       this.root.querySelectorAll('button')[0].addEventListener('click', function(el){

          var sel = THIZ.root.querySelector('input[name="' +THIZ.name+ '"]:checked').value
          disE(THIZ.ID, sel)
       })
    })
    function disE(ID, sel) {
       console.log(ID, sel)
       dispatchEvent(new CustomEvent('surveyitem-comp', { detail: {
          id: ID, selected: sel
       } } ) )
    }

    this.init = function(question, arr, ID, foo) {
       addEventListener('surveyitem-comp', foo)

       THIZ.name = makeid()
       THIZ.ID = ID
       console.log(THIZ.name)
       this.question = question

       var sz = arr.length
       THIZ.items = []
       for(i = 0; i < sz; i++) {
          var choice = arr[i]
          var item = {}
          item.choice = choice
          THIZ.items.push(item)
       }
       console.log(THIZ.items)

       THIZ.update()
    }.bind(this)

    function makeid() {
       var length = 6
       var result           = ''
       var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
       var charactersLength = characters.length
       for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
       }
       return result
    }
});