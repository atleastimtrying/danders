(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Input = (function() {
    function Input(app) {
      this.app = app;
      this.mouseMove = __bind(this.mouseMove, this);
      this.keyPress = __bind(this.keyPress, this);
      this.input = $('input');
      this.input.keypress(this.keyPress);
      $('a').click(this.showWindow);
      $('canvas').mousemove(this.mouseMove);
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
        this.app.request.user(this.input.val(), this.app.nodes.newMasterNode);
        return this.hideWindow();
      }
    };
    Input.prototype.nodeHitTest = function(mouse_x, mouse_y, node) {
      var hit, xs, ys;
      xs = node.x - mouse_x;
      xs = xs * xs;
      ys = node.y - mouse_y;
      ys = ys * ys;
      return hit = Math.sqrt(xs + ys) < node.radius;
    };
    Input.prototype.mouseMove = function(event) {
      var mouseX, mouseY, node, _i, _len, _ref;
      mouseX = event.pageX;
      mouseY = event.pageY;
      _ref = this.app.nodes.collection;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if (this.nodeHitTest(mouseX, mouseY, node)) {
          console.log(node.name);
          return;
        }
      }
    };
    return Input;
  })();
}).call(this);
