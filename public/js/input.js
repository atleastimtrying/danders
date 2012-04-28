(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Input = (function() {
    function Input(app) {
      this.app = app;
      this.keyPress = __bind(this.keyPress, this);
      this.input = $('input');
      this.input.keypress(this.keyPress);
      $('a').click(this.showWindow);
      this.showWindow();
    }
    Input.prototype.hideWindow = function() {
      $('div').hide();
      $('a').show();
      return this.input.val("");
    };
    Input.prototype.showWindow = function() {
      $('div').show();
      $('a').hide();
      return false;
    };
    Input.prototype.keyPress = function(event) {
      if (event.keyCode === 13) {
        this.app.request.user(this.input.val(), this.app.yell);
        return this.hideWindow();
      }
    };
    return Input;
  })();
}).call(this);
