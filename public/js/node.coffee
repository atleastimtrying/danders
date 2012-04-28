class window.Node
  constructor: (@ctx, data, @x, @y, scale)->
    @name = data.name
    @radius = data.repo_count * scale
    @followers = data.followers
    @languages = data.languages
    @colour = "rgba(0,0,0,0.5)"
    @currentPercentage = 0

  draw: =>
    @currentPercentage = 0
    @ctx.translate @x , @y 
    @drawArcByPercentage(language, percent) for language, percent in @langauges
    @ctx.translate -@x, -@y

  drawArcByPercentage: (language, percent)->
    @beginPath()
    @arc 0, 0, @radius, 0, Math.PI * 2, false
    @closePath()