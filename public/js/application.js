(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.App = (function() {
    function App() {
      this.resize = __bind(this.resize, this);
      this.animate = __bind(this.animate, this);      this.canvas = $('canvas');
      this.ctx = this.canvas[0].getContext('2d');
      this.ctx.fillEllipse = function(x, y, radius) {
        this.beginPath();
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.closePath();
        return this.fill();
      };
      this.nodes = new Nodes(this.ctx);
      this.request = new ApiRequester();
      this.input = new Input(this);
      $(window).resize(this.resize);
      this.resize();
      this.animate();
    }
    App.prototype.wipe = function() {
      this.ctx.fillStyle = '#efefef';
      return this.ctx.fillRect(0, 0, this.width, this.height);
    };
    App.prototype.draw = function() {
      this.wipe();
      return this.nodes.draw();
    };
    App.prototype.animate = function() {
      this.draw();
      return window.requestAnimationFrame(this.animate);
    };
    App.prototype.resize = function() {
      this.width = $(window).width();
      this.height = $(window).height();
      this.canvas[0].width = this.width;
      return this.canvas[0].height = this.height;
    };
    App.prototype.cornerEllipses = function() {
      this.ctx.fillStyle = 'black';
      this.ctx.fillEllipse(0, 0, 10);
      this.ctx.fillEllipse(this.width, 0, 10);
      this.ctx.fillEllipse(0, this.height, 10);
      return this.ctx.fillEllipse(this.width, this.height, 10);
    };
    App.prototype.yell = function(data) {
      return console.log(data);
    };
    return App;
  })();
  $(function() {
    return window.app = new App;
  });
}).call(this);
