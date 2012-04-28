class window.ApiRequester
  constructor: ->
    #dunno yet?

  user: (name, handler) ->
  
    $.get "/people/#{name}.json", (data) =>
      handler data
      
