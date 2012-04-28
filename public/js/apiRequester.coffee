class window.ApiRequester
  constructor: (@app)->
    #dunno yet?

  user: (name, handler) ->
  
    $.get("/people/#{name}.json", (data) =>
      handler data
    ).error ()=> 
      @app.showInfoBox "OH NOES I BROKE!"
