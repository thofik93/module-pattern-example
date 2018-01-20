var montase = (function(montase, $){
  'use strict'

  var _proto = montase.proto = montase.proto || {};
  
  _proto.$window = $(window)
  
  _proto.$body = $('body')

  _proto.isMobile = _isMobile()

  function _isMobile () {
    var isMobile = _proto.$window.width() <= 768 ? true : false 
    return isMobile 
  }

  return montase

})(montase || {}, jQuery);