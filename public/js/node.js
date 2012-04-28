(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Node = (function() {
    function Node(ctx, data, x, y, scale) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.draw = __bind(this.draw, this);
      this.name = data.name;
      this.radius = data.repo_count * scale;
      this.followers = data.followers;
      this.languages = data.languages;
      this.colour = "rgba(0,0,0,0.5)";
      this.currentPercentage = 0;
    }
    Node.prototype.draw = function() {
      var language, percent, _ref;
      this.currentPercentage = 0;
      this.ctx.translate(this.x, this.y);
      _ref = this.langauges;
      for (language in _ref) {
        percent = _ref[language];
        this.drawArcByPercentage(language, percent);
      }
      return this.ctx.translate(-this.x, -this.y);
    };
    Node.prototype.drawArcByPercentage = function(language, percent) {
      this.beginPath();
      this.arc(0, 0, this.radius, 0, Math.PI * 2, false);
      return this.closePath();
    };
    return Node;
  })();
}).call(this);
