(function() {
  window.Input = (function() {
    function Input() {
      $('input').keypress(this.keyPress);
    }
    Input.prototype.keyPress = function(event) {
      return console.log(event);
    };
    return Input;
  })();
}).call(this);
