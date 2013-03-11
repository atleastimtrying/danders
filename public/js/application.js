(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  window.App = (function() {

    function App() {
      this.resize = __bind(this.resize, this);
      this.animate = __bind(this.animate, this);      this.canvas = $('canvas');
      this.ctx = this.canvas[0].getContext('2d');
      this.ctx.fillEllipse = function(x, y, radius) {
        this.shadowOffsetX = 2;
        this.shadowOffsetY = 2;
        this.shadowBlur = 4;
        this.beginPath();
        this.arc(x, y, radius, 0, Math.PI * 2, false);
        this.closePath();
        return this.fill();
      };
      this.nodes = new Nodes(this);
      this.request = new ApiRequester(this);
      this.input = new Input(this);
      $(window).resize(this.resize);
      this.resize();
      this.animate();
      this.colours = {
        'JavaScript': "green",
        'CoffeeScript': "brown",
        'Java': "orange",
        'Python': "yellow",
        'Ruby': "red",
        'PHP': "purple",
        "C#": "pink",
        "C++": "teal",
        'VimL': "silver",
        'Haskell': "#333",
        'Scala': "#cc3",
        'Clojure': "#33c",
        "Objective-C": "#3c3",
        "C": "#fff0f0",
        "Perl": "#fffff0",
        "Prolog": "#b00b1e5",
        "Shell": "#cc0cc0",
        "Lua": "gold",
        "Erlang": "#218376",
        "Emacs Lisp": "#986734",
        "Scheme": "#ededde"
      };
    }

    App.prototype.hideMask = function() {
      return $('#mask').removeClass('show').addClass('hide');
    };

    App.prototype.showMask = function() {
      return $('#mask').removeClass('hide').addClass('show');
    };

    App.prototype.showInfoBox = function(node) {
      var info_span;
      info_span = $('#sidebar');
      info_span.html("<p>" + node.name + "</p>");
      return info_span.show();
    };

    App.prototype.hideInfoBox = function() {
      return $('span').hide();
    };

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

    App.prototype.getLanguageColour = function(language) {
      if (this.colours[language]) {
        return this.colours[language];
      } else {
        return "rgba(" + (this.roundom(255)) + "," + (this.roundom(255)) + "," + (this.roundom(255)) + ")";
      }
    };

    App.prototype.toRadians = function(degrees) {
      return degrees * (Math.PI / 180);
    };

    App.prototype.percentToRadians = function(percent) {
      var degrees, radians;
      degrees = (percent / 100) * 360;
      radians = this.toRadians(degrees);
      return radians;
    };

    App.prototype.roundom = function(int) {
      return Math.round(Math.random() * int);
    };

    return App;

  })();

  $(function() {
    return window.app = new App;
  });

}).call(this);
