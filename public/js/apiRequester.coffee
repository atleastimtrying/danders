class window.ApiRequester
  constructor: (@app)->

  user: (name, handler) ->
    # if @app.nodes.collection[0]
    #   $("#back").show()
    #   @previousRequest = @app.nodes.collection[0].name
    $.get("/people/#{name}.json", (data) =>
      handler data
    ).error ()=> 
      @app.showInfoBox "OH NOES I BROKE!"
