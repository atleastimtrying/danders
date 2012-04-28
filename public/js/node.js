(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Node = (function() {
    function Node(ctx, data) {
      this.ctx = ctx;
      this.draw = __bind(this.draw, this);
      this.x = data.x;
      this.y = data.y;
      this.name = data.name;
      this.radius = data.repo_count;
      this.followers = data.followers;
      this.colour = "green";
    }
    Node.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.fillStyle = this.colour;
      this.ctx.fillEllipse(0, 0, this.radius);
      return this.ctx.translate(-this.x, -this.y);
    };
    return Node;
  })();
}).call(this);
