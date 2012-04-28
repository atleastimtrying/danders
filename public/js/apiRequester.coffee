class window.ApiRequester
  constructor: ->
    #dunno yet?
  repos: (name)->
    $.get '/repos/#{name}.json', (data)->
      result = 'fail!'

  user: (name)->
    result = 'fail!'
    $.get '/people/#{name}.json', (data)->
      result = 'fail!'
    return result