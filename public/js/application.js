(function() {
  var Sight, Target, sketch;
  Sight = (function() {
    function Sight(p5) {
      this.p5 = p5;
      this.x = this.p5.width / 2;
      this.y = this.p5.height / 2;
    }
    Sight.prototype.draw = function() {
      this.p5.noFill();
      this.p5.stroke(0);
      this.p5.strokeWeight(1200);
      this.p5.ellipse(this.p5.mouseX, this.p5.mouseY, 1500, 1500);
      this.p5.noStroke();
      this.p5.fill(0);
      this.p5.rectMode(this.p5.CENTER);
      this.p5.rect(this.p5.mouseX, this.p5.mouseY, 100, 2);
      this.p5.rect(this.p5.mouseX, this.p5.mouseY, 2, 100);
      return this.p5.rectMode(this.p5.CORNER);
    };
    return Sight;
  })();
  Target = (function() {
    function Target(p5) {
      this.p5 = p5;
      this.x = p5.random(p5.width);
      this.y = p5.random(p5.height);
      this.C = this.p5.color(this.p5.random(255));
    }
    Target.prototype.draw = function() {
      if (this.p5.mousePressed && this.hitTest()) {
        return alert("shot");
      } else {
        this.p5.fill(this.C);
        return this.p5.ellipse(this.x, this.y, 20, 20);
      }
    };
    Target.prototype.hitTest = function() {
      return this.p5.dist(this.p5.mouseX, this.p5.mouseY, this.x, this.y) < 10;
    };
    return Target;
  })();
  sketch = function(p5) {
    p5.setup = function() {
      var whatever, _results;
      p5.size(960, 400);
      p5.background(255);
      p5.smooth();
      this.sight = new Sight(p5);
      this.particles = [];
      _results = [];
      for (whatever = 1; whatever <= 65; whatever++) {
        _results.push(this.particles.push(new Target(p5)));
      }
      return _results;
    };
    return p5.draw = function() {
      var particle, _i, _len, _ref;
      p5.background(255);
      p5.noStroke();
      _ref = this.particles;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        particle = _ref[_i];
        particle.draw();
      }
      return this.sight.draw();
    };
  };
  $(function() {
    var processing;
    return processing = new Processing(($("canvas"))[0], sketch);
  });
}).call(this);
