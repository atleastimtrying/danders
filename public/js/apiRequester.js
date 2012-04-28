(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  window.ApiRequester = (function() {
    function ApiRequester() {}
    ApiRequester.prototype.user = function(name, handler) {
      return $.get("/people/" + name + ".json", __bind(function(data) {
        return handler(data);
      }, this));
    };
    return ApiRequester;
  })();
}).call(this);
