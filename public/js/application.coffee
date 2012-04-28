class Sight

	constructor: (@p5) ->
		@x = @p5.width/2
		@y = @p5.height/2
	draw: ()->
		@p5.noFill()
		@p5.stroke(0)
		@p5.strokeWeight(1200)
		@p5.ellipse @p5.mouseX,@p5.mouseY, 1500, 1500
		@p5.noStroke()
		@p5.fill(0)
		@p5.rectMode(@p5.CENTER)
		@p5.rect(@p5.mouseX,@p5.mouseY, 100, 2)
		@p5.rect(@p5.mouseX,@p5.mouseY, 2, 100)
		@p5.rectMode(@p5.CORNER)

class Target
	constructor: (@p5) ->
		@x = p5.random(p5.width)
		@y = p5.random(p5.height)
		@C = @p5.color(@p5.random(255))

	draw: ->
		if @p5.mousePressed && @hitTest()
			alert "shot"
		else
			@p5.fill @C
			@p5.ellipse @x, @y, 20, 20
	hitTest: ->
		@p5.dist(@p5.mouseX, @p5.mouseY, @x,@y) < 10
sketch = (p5) ->
	p5.setup = () ->
		p5.size(960, 400)
		p5.background(255)
		p5.smooth()
		@sight = new Sight(p5)
		@particles = []
		@particles.push new Target(p5) for whatever in [1..65]

	p5.draw = () ->
		p5.background 255
		p5.noStroke()
		particle.draw() for particle in @particles
		@sight.draw()
	
$ ->
	processing = new Processing ($ "canvas")[0], sketch