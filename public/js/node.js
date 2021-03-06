(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.Node = (function() {

    function Node(ctx, data, x, y, scale) {
      this.ctx = ctx;
      this.x = x;
      this.y = y;
      this.draw = __bind(this.draw, this);
      this.name = data.name;
      this.radius = data.repos.length * scale;
      this.followers = data.followers;
      this.languages = data.languages;
      this.colour = "rgba(0,0,0,0.5)";
      this.currentRadians = 0;
      this.sprite = this.makeImage(this.languages);
      this.makeKey();
    }

    Node.prototype.draw = function() {
      this.ctx.translate(this.x, this.y);
      this.ctx.drawImage(this.sprite, -this.radius, -this.radius);
      this.ctx.translate(-this.x, -this.y);
      if (this.name !== null) return this.writeName();
    };

    Node.prototype.writeName = function() {
      this.ctx.fillStyle = "#333";
      this.ctx.font = "46px sans-serif";
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "top";
      this.ctx.translate(this.x, this.y + 50);
      this.ctx.fillText(this.name, 0, this.radius);
      return this.ctx.translate(-this.x, -(this.y + 50));
    };

    Node.prototype.makeImage = function(languages) {
      var canvas, ctx, img, language, percent, _ref;
      canvas = document.createElement('canvas');
      ctx = canvas.getContext('2d');
      canvas.width = this.radius * 2 + 10;
      canvas.height = this.radius * 2 + 10;
      _ref = this.languages;
      for (language in _ref) {
        percent = _ref[language];
        this.drawArcByPercentage(ctx, language, percent, this.radius, this.radius);
      }
      img = new Image();
      img.src = canvas.toDataURL();
      return img;
    };

    Node.prototype.drawArcByPercentage = function(ctx, language, percent, x, y) {
      var colour, percentInRadians;
      percentInRadians = window.app.percentToRadians(percent);
      colour = app.getLanguageColour(language);
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 4;
      ctx.shadowColor = 'grey';
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.arc(x, y, this.radius, this.currentRadians, this.currentRadians + percentInRadians, false);
      ctx.closePath();
      ctx.fillStyle = colour;
      ctx.fill();
      return this.currentRadians += percentInRadians;
    };

    Node.prototype.makeKey = function() {
      var language, percent, string, _ref;
      string = "<h2>Language Key</h2><ul>";
      _ref = this.languages;
      for (language in _ref) {
        percent = _ref[language];
        string += "<li><div class='colourblock' style='background-color:" + (app.getLanguageColour(language)) + ";'></div> " + (Math.round(percent)) + "&percnt; : " + language + "</li>";
      }
      string += "<ul>";
      return $('#key').html(string);
    };

    return Node;

  })();

}).call(this);
