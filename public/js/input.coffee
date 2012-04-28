class window.Input
  constructor: (@app)->
    @input = $('input')
    @input.keypress @keyPress
    $('a').click @showWindow

    $('canvas').mousemove @mouseMove
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
      @app.request.user @input.val(), @app.nodes.newMasterNode
      @hideWindow()

  nodeHitTest: (mouse_x, mouse_y, node) ->
    xs = node.x - mouse_x
    xs = xs * xs

    ys = node.y - mouse_y
    ys = ys * ys

    hit = Math.sqrt(xs + ys) < node.radius

  mouseMove: (event) =>
    mouseX = event.pageX
    mouseY = event.pageY

    for node in @app.nodes.collection
      if @nodeHitTest mouseX, mouseY, node
        console.log node.name
        @app.showInfoBox node

