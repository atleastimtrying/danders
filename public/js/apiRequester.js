
  window.ApiRequester = (function() {

    function ApiRequester(app) {
      this.app = app;
    }

    ApiRequester.prototype.user = function(name, handler) {
      var _this = this;
      return $.get("/people/" + name + ".json", function(data) {
        return handler(data);
      }).error(function() {
        return _this.app.showInfoBox("OH NOES I BROKE!");
      });
    };

    return ApiRequester;

  })();
