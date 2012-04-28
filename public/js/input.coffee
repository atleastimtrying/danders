class window.Input
  constructor: (@app)->
    @input = $('input')
    @input.keypress @keyPress
    $('a').click @showWindow
    #$('#back').click @goBack

    @app.canvas.mousemove @mouseMove
    @app.canvas.click @canvasClick
    @showWindow()
    
  hideWindow: ->
    $('div#username_box').hide();
    $('a').show();
    @input.val ""

  showWindow: ->
    $('div#username_box').show();
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
        node.colour = "#333"
        @app.showInfoBox node
      else
        node.colour = "#ccc"

  canvasClick: (event) =>
    mouseX = event.pageX
    mouseY = event.pageY
    
    for node in @app.nodes.collection
      if @nodeHitTest mouseX, mouseY, node

        @app.showMask()
       
        @app.request.user(node.name, @app.nodes.newMasterNode) 
        return
  #goBack: (event)=>
  #  @app.request.user(@app.request.previousRequest, @app.nodes.newMasterNode) 
