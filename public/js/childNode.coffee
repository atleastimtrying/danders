class window.ChildNode
  constructor: (@ctx, @name, @x, @y, scale)->
    @radius = 10 * scale
    @colour = "#ccc"

  draw: =>
    @ctx.translate @x , @y 
    @ctx.fillStyle = @colour
    @ctx.fillEllipse 0, 0, @radius
    @ctx.translate -@x, -@y
