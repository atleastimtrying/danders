class window.Input
  constructor: ->
    $('input').keypress @keyPress

  keyPress: (event)->
      console.log event