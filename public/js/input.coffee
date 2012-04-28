class window.Input
  constructor: (@app)->
    @input = $('input')
    @input.keypress @keyPress
    $('a').click @showWindow
    @showWindow()
    
  hideWindow: ->
    $('div').hide();
    $('a').show();
    @input.val ""

  showWindow: ->
    $('div').show();
    $('a').hide();
    false

  keyPress: (event)=>
    if event.keyCode is 13
      @app.request.user @input.val(), @app.yell
      @hideWindow()