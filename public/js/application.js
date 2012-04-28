(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.App = (function() {
    function App() {
      this.animate = __bind(this.animate, this);      this.canvas = $('canvas');
      this.ctx = canvas[0].getContext('2d');
      this.resize();
      $(window).resize(this.resize);
    }
    App.prototype.draw = function() {
      this.ctx.fillStyle = '#efefef';
      return this.ctx.fillRect(0, 0, this.width, this.height);
    };
    App.prototype.animate = function() {
      this.draw();
      return window.requestAnimationFrame(this.animate);
    };
    App.prototype.resize = function() {
      this.width = $(window).width;
      this.height = $(window).height;
      this.canvas.width = this.width;
      return this.canvas.height = this.height;
    };
    return App;
  })();
  $(function() {
    return window.app = new App;
  });
}).call(this);
