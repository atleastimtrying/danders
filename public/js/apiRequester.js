(function() {
  window.ApiRequester = (function() {
    function ApiRequester() {}
    ApiRequester.prototype.repos = function(name) {
      return $.get('/repos/#{name}.json', function(data) {
        var result;
        return result = 'fail!';
      });
    };
    ApiRequester.prototype.user = function(name) {
      var result;
      result = 'fail!';
      $.get('/people/#{name}.json', function(data) {
        return result = 'fail!';
      });
      return result;
    };
    return ApiRequester;
  })();
}).call(this);
