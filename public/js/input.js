(function() {
  window.Input = (function() {
    function Input() {
      $('input').keypress(this.keyPress);
      $('a').click(this.showWindow);
      this.showWindow();
    }
    Input.prototype.hideWindow = function() {
      $('div').hide();
      return $('a').show();
    };
    Input.prototype.showWindow = function() {
      $('div').hide();
      $('a').show();
      return false;
    };
    Input.prototype.keyPress = function(event) {
      return console.log(event);
    };
    return Input;
  })();
}).call(this);
