define(["jquery", "modules/montase", "modules/button/button"], function($) {  

  $(function(){
    var btn   = new montase.button.Init(document.querySelectorAll('#normalButton'))
    var btn2  = new montase.button.Init($('#normalButtonTwo'))
    document.getElementById('setLoading')
      .addEventListener('click', function(e){
        e.preventDefault()
        btn.setLoading()
        btn.$el.addClass('done')
      });

    document.getElementById('stop')
      .addEventListener('click', function(e){
        e.preventDefault()
        btn.stop()
      });
  })
})