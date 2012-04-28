(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Nodes = (function() {
    function Nodes(app) {
      this.app = app;
      this.newMasterNode = __bind(this.newMasterNode, this);
      this.newChildNode = __bind(this.newChildNode, this);
      this.draw = __bind(this.draw, this);
      this.collection = [];
    }
    Nodes.prototype.draw = function() {
      var node, _i, _len, _ref, _results;
      _ref = this.collection;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        _results.push(node.draw());
      }
      return _results;
    };
    Nodes.prototype.newChildNode = function(name, i, count, masterNode) {
      var angle, node, rad, x, y;
      angle = (360 / count) * i;
      rad = masterNode.radius + 20;
      x = masterNode.x + (rad * Math.cos(angle));
      y = masterNode.y + (rad * Math.sin(angle));
      node = new ChildNode(this.app.ctx, name, x, y, 1);
      return this.collection.push(node);
    };
    Nodes.prototype.newMasterNode = function(data) {
      var follower, i, node, _len, _ref, _results;
      this.collection = [];
      node = new Node(this.app.ctx, data, this.app.width / 2, this.app.height / 2, 3);
      this.collection.push(node);
      _ref = data.followers;
      _results = [];
      for (i = 0, _len = _ref.length; i < _len; i++) {
        follower = _ref[i];
        _results.push(this.newChildNode(follower, i, data.followers.length, node));
      }
      return _results;
    };
    return Nodes;
  })();
}).call(this);
