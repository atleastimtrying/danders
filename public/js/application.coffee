class window.App
  constructor: ->
    @canvas = $ 'canvas'
    @ctx = @canvas[0].getContext '2d'
    @ctx.fillEllipse = (x,y,radius)->
      @beginPath()
      @arc x, y, radius, 0, Math.PI * 2, false
      @closePath()
      @fill()
    @nodes = new Nodes(@)
    @request = new ApiRequester()
    @input = new Input(@)
    $(window).resize @resize
    @resize()
    @animate()
    @colours =
      JavaScript:"green"
      CoffeeScript:"brown"
      Java:"orange"
      Python:"yellow"
      Ruby:"red"
      PHP: "purple"
      "C#": "pink"
      "C++": "teal"
      VimL: "silver"
      Haskell: "#333"
      Scala: "#cc3"
      Clojure: "#33c"

  hideMask: () ->
    # start fade
    $('#mask').removeClass('show').addClass('hide')

  showMask: () ->
    # start fade
    $('#mask').removeClass('hide').addClass('show')

  showInfoBox: (node) ->  
    info_span = $('span')
    info_span.html node.name
    info_span.show()

  hideInfoBox:->
    $('span').hide()
    
  wipe: ->
    @ctx.fillStyle = '#efefef'
    @ctx.fillRect 0, 0, @width, @height

  draw: ->
    @wipe()
    #@cornerEllipses()
    @nodes.draw()

  animate: =>
    @draw()
    window.requestAnimationFrame @animate

  resize: =>  
    @width = $(window).width()
    @height = $(window).height()
    @canvas[0].width = @width
    @canvas[0].height = @height

  cornerEllipses: ->
    @ctx.fillStyle = 'black'
    @ctx.fillEllipse 0, 0, 10
    @ctx.fillEllipse @width, 0, 10
    @ctx.fillEllipse 0, @height, 10
    @ctx.fillEllipse @width, @height, 10

  getLanguageColour: (language)->
    if @colours[language]
      return @colours[language]
    else
      return "rgba(#{@roundom(255)},#{@roundom(255)},#{@roundom(255)})"

  toRadians: (degrees)->
    degrees * (Math.PI/180)

  percentToRadians: (percent)->
    degrees = (percent/100) * 360
    radians = @toRadians(degrees)
    return radians

  roundom: (int)->
    Math.round(Math.random() * int)
$ ->
  window.app = new App