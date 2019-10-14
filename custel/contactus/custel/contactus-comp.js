
riot.tag2('contactus-comp', '<form class="form-comp grid-form" id="mailFrm"> <fieldset> <legend>{this.opts.legend_title}</legend> <div data-row-span="2"> <div data-field-span="1"> <label>Name</label> <input id="name" type="text" name="name"> </div> <div data-field-span="1"> <label>E-mail</label> <input id="email" name="email" type="email"> </div> </div> <div data-row-span="1"> <div data-field-span="1"> <label>Message</label> <textarea name="msg" type=""></textarea> </div> </div> </fieldset> <button class="btn btn-primary float-right mt-2" id="sendBut">Send Message</button> </form>', '', '', function(opts) {
    loadVexAlertFlat()

    if(!depp.isDefined('contactus-comp_')) {
          depp.define({ 'contactus-comp_': [

          '#DOM',

          'https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js',
          'https://cdn.jsdelivr.net/npm/disableautofill@1.2.8/src/jquery.disableAutoFill.min.js',
          '#emailjs',
          '#validate',
          '#loadedVexAlertFlat'
          ]
       })
    }
    depp.require('contactus-comp_')

    this.on('mount', function(){
       depp.require('contactus-comp_', function(){
          onMount()
       })
    })

    var _this = this

    function onMount() {
       console.log('mount!!')
       var emailjs_id = _this.opts.emailjs_id
       var template_id = _this.opts.template_id
       var service_id = _this.opts.service_id
       var reply_to = _this.opts.reply_to
       var from_name = _this.opts.from_name
       var to_name = _this.opts.to_name
       var from_email = _this.opts.from_email
       var message_html = _this.opts.message_html

       emailjs.init(emailjs_id);
       $('#mailFrm').disableAutoFill()

       $('#mailFrm').on('submit', function(e) {
          e.preventDefault(); 
          console.log('klik')
          var msg = val()

          if(msg==='OK') {

                var template = {
                      reply_to: reply_to,
                      from_name: typeof from_name !=='undefined' ? from_name : $('#name').val(),
                      to_name: typeof to_name !=='undefined' ? to_name : '',
                      from_email: typeof from_email !=='undefined' ? from_email: $('#email').val(),
                      message_html: typeof message_html !=='undefined' ? message_html: $("textarea[name='msg']").val(),
                }

                emailjs.send(service_id, template_id, template )
                   .then(function(response) {
                      vex.dialog.confirm({ message: 'Your message has been sent', callback: function(){} })

                      $("#name, #email, textarea[name='msg']").val('')

                      console.log('SUCCESS!', response.status, response.text);
                   }, function(error) {
                      vex.dialog.confirm({ message: 'Something went wrong', callback: function(){} })
                      $("#name, #email, textarea[name='msg']").val('')
                      console.log('FAILED...', error)
                   })

          } else {
             console.info('wrong', msg)
                vex.dialog.confirm({ message: msg, callback: function(){} })
          }
       })
    }

    function val() {
       console.log('val')
       var form = $('#mailFrm');

       var name = form.find('#name').attr('name');
       var email = form.find('#email').attr('name');

       var constraints = {};
       constraints[name] = {
          presence: true
       };
       constraints[email] = {
          presence: true,
          email: true
       };
       constraints['msg'] = {
          presence: true
       };

       var errors = validate(form, constraints, {format: "flat"});

       if(errors){
          return errors;
       } else {
          return 'OK';
       }

    }
});