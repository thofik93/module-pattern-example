define(["jquery", "modules/qdh", "modules/button/button"/*, "modules/button/buttonDropdown"*/], function($) {  

  $(function(){
    var btn   = new qdh.button.Init(document.querySelectorAll('#normalButton'))
    var btn2  = new qdh.button.Init($('#normalButtonTwo'))
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