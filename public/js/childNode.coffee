class window.ChildNode
  constructor: (@ctx, @name, @x, @y, scale)->
    @radius = 10 * scale
    @colour = "rgba(0,0,150,0.5)"

  draw: =>
    @ctx.translate @x , @y 
    @ctx.fillStyle = @colour
    @ctx.fillEllipse 0, 0, @radius
    @ctx.translate -@x, -@y
