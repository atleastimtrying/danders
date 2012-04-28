class window.Node
  constructor: (@ctx, data, @x, @y, scale)->
    @name = data.name
    @radius = data.repo_count * scale
    @followers = data.followers
    @languages = data.languages
    @colour = "rgba(0,0,0,0.5)"
    @currentRadians = 0
    @makeImage(@languages)

  draw: =>
    @ctx.translate @x, @y 
    #draw image
    @ctx.translate -@x, -@y

  makeImage: (languages)->
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
    canvas.width = @radius *2
    canvas.height = @radius *2
    @drawArcByPercentage(ctx,language, percent,canvas.width/2,canvas.height/2) for language, percent of @languages
    window.open(canvas.toDataURL(), "pieImage", "left=0,top=0,width=#{canvas.width},height=#{canvas.height},toolbar=0,resizable=0")

  drawArcByPercentage: (ctx,language, percent,x,y)->
    percentInRadians = window.app.percentToRadians percent
    colour = app.getLanguageColour(language)
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.arc x, y, @radius, @currentRadians, @currentRadians + percentInRadians, false
    ctx.closePath()
    ctx.fillStyle = colour
    ctx.fill()
    @currentRadians += percentInRadians