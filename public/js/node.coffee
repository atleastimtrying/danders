class window.Node
  constructor: (@ctx, data, @x, @y, scale)->
    @name = data.name
    @radius = data.repo_count * scale
    @followers = data.followers
    @languages = data.languages
    @colour = "rgba(0,0,0,0.5)"
    @currentRadians = 0
    @sprite = @makeImage(@languages)
    @makeKey()

  draw: =>
    @ctx.translate @x, @y 
    @ctx.drawImage @sprite, -@radius, -@radius
    @ctx.translate -@x, -@y
    @writeName() if @name isnt null

  writeName: ->
    @ctx.fillStyle = "#333"
    @ctx.font = "46px sans-serif"
    @ctx.textAlign = "center"
    @ctx.textBaseline = "top"
    @ctx.translate @x, @y + 50
    @ctx.fillText @name, 0, @radius
    @ctx.translate -@x, -(@y + 50)

  makeImage: (languages)->
    canvas = document.createElement('canvas')
    ctx = canvas.getContext('2d')
    canvas.width = @radius *2 + 10
    canvas.height = @radius *2 + 10
    @drawArcByPercentage(ctx,language, percent,@radius,@radius) for language, percent of @languages
    #window.open(canvas.toDataURL(), "pieImage", "left=0,top=0,width=#{canvas.width},height=#{canvas.height},toolbar=0,resizable=0")
    img = new Image()
    img.src = canvas.toDataURL()
    img

  drawArcByPercentage: (ctx,language, percent,x,y)->
    percentInRadians = window.app.percentToRadians percent
    colour = app.getLanguageColour(language)
    ctx.shadowOffsetX = 2
    ctx.shadowOffsetY = 2
    ctx.shadowBlur = 4
    ctx.shadowColor ='grey'
    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.arc x, y, @radius, @currentRadians, @currentRadians + percentInRadians, false
    ctx.closePath()
    ctx.fillStyle = colour
    ctx.fill()
    @currentRadians += percentInRadians

  makeKey: ->
    string = "<h2>Language Key</h2><ul>"
    string += "<li><div class='colourblock' style='background-color:#{app.getLanguageColour(language)};'></div> #{Math.round(percent)}&percnt; : #{language}</li>" for language, percent of @languages
    string += "<ul>"
    $('#key').html string