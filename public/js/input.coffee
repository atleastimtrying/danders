class window.Input
  constructor: ->
    $('input').keypress @keyPress
    $('a').click @showWindow
    @showWindow()
    
  hideWindow: ->
    $('div').hide();
    $('a').show();

  showWindow: ->
    $('div').hide();
    $('a').show();
    false

  keyPress: (event)->
      console.log event