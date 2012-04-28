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
      this.currentRadians = 0;
      this.sprite = this.makeImage(this.languages);
    }
    Node.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.drawImage(this.sprite, -this.radius, -this.radius);
      return this.ctx.translate(-this.x, -this.y);
    };
    Node.prototype.makeImage = function(languages) {
      var canvas, ctx, img, language, percent, _ref;
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      canvas.width = this.radius * 2;
      canvas.height = this.radius * 2;
      _ref = this.languages;
      for (language in _ref) {
        percent = _ref[language];
        this.drawArcByPercentage(ctx, language, percent, canvas.width / 2, canvas.height / 2);
      }
      img = new Image();
      img.src = canvas.toDataURL();
      return img;
    };
    Node.prototype.drawArcByPercentage = function(ctx, language, percent, x, y) {
      var colour, percentInRadians;
      percentInRadians = window.app.percentToRadians(percent);
      colour = app.getLanguageColour(language);
      console.log(language);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, this.radius, this.currentRadians, this.currentRadians + percentInRadians, false);
      ctx.closePath();
      ctx.fillStyle = colour;
      ctx.fill();
      return this.currentRadians += percentInRadians;
    };
    return Node;
  })();
}).call(this);
