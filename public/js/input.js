(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Input = (function() {
    function Input(app) {
      this.app = app;
      this.canvasClick = __bind(this.canvasClick, this);
      this.mouseMove = __bind(this.mouseMove, this);
      this.keyPress = __bind(this.keyPress, this);
      this.input = $('input');
      this.input.keypress(this.keyPress);
      $('a').click(this.showWindow);
      this.app.canvas.mousemove(this.mouseMove);
      this.app.canvas.click(this.canvasClick);
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
      var mouseX, mouseY, node, _i, _len, _ref, _results;
      mouseX = event.pageX;
      mouseY = event.pageY;
      _ref = this.app.nodes.collection;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(this.nodeHitTest(mouseX, mouseY, node) ? this.app.showInfoBox(node) : void 0);
      }
      return _results;
    };
    Input.prototype.canvasClick = function(event) {
      var mouseX, mouseY, node, _i, _len, _ref, _results;
      mouseX = event.pageX;
      mouseY = event.pageY;
      _ref = this.app.nodes.collection;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(this.nodeHitTest(mouseX, mouseY, node) ? this.app.request.user(node.name, this.app.nodes.newMasterNode) : void 0);
      }
      return _results;
    };
    return Input;
  })();
}).call(this);
