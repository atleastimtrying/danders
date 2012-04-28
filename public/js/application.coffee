class window.App
  constructor: ->
    @canvas = $ 'canvas'
    @ctx = canvas[0].getContext '2d'
    @resize()
    $(window).resize @resize

  draw: ->
    @ctx.fillStyle = '#efefef'
    @ctx.fillRect 0, 0, @width, @height

  animate: =>
    @draw()
    window.requestAnimationFrame @animate

  resize: ->  
    @width = $(window).width
    @height = $(window).height
    @canvas.width = @width
    @canvas.height = @height
	
$ ->
  window.app = new App