(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.Nodes = (function() {
    function Nodes(ctx) {
      this.ctx = ctx;
      this.makeNode = __bind(this.makeNode, this);
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
    Nodes.prototype.makeNode = function(event) {
      return this.newNode({
        x: event.pageX,
        y: event.pageY,
        repo_count: 4,
        name: 'Dan',
        followers: 1
      });
    };
    Nodes.prototype.newNode = function(data) {
      var node;
      node = new Node(this.ctx, data);
      return this.collection.push(node);
    };
    return Nodes;
  })();
}).call(this);
