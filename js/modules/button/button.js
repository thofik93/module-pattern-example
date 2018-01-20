var montase = (function(montase){
  "use strict"

  var button = montase.button = montase.button || {}

  var loadingClassName = "is-loading"
  
  button.Init = function(element) {
    this.$el        = element instanceof jQuery ? element : $(element)
    this.setLoading = _setLoading
    this.stop       = _stop
  }

  function _setLoading() {
    return this.$el.addClass(loadingClassName)
  }

  function _stop() {
    return this.$el.removeClass(loadingClassName)
  }

  return montase;

})(montase || {});