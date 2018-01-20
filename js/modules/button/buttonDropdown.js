var montase = (function(montase){
  'use strict'

  var buttonDropdown = montase.buttonDropdown = montase.buttonDropdown || {}
  

  buttonDropdown.setDropdown = function() {
    console.log('make this button have a dropdown ability')
  }


  buttonDropdown = Object.assign(buttonDropdown, montase.button)

  return montase

})(montase || {});