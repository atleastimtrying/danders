(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.ChildNode = (function() {
    function ChildNode(ctx, name, x, y, scale) {
      this.ctx = ctx;
      this.name = name;
      this.x = x;
      this.y = y;
      this.draw = __bind(this.draw, this);
      this.radius = 10 * scale;
      this.colour = "rgba(0,0,150,0.5)";
    }
    ChildNode.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.fillStyle = this.colour;
      this.ctx.fillEllipse(0, 0, this.radius);
      return this.ctx.translate(-this.x, -this.y);
    };
    return ChildNode;
  })();
}).call(this);
