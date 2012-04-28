class window.Node
  constructor: (@ctx, data)->
    @x = data.x
    @y = data.y
    @name = data.name
    @radius = data.repo_count
    @followers = data.followers
    @colour = "green"

  draw:()=>
    @ctx.translate @x , @y 
    @ctx.fillStyle = @colour
    @ctx.fillEllipse 0, 0, @radius
    @ctx.translate -@x, -@y
