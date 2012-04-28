class window.Nodes
  constructor: (@app)->
    @collection = []

  draw: =>
    node.draw() for node in @collection

  newChildNode: (name, i, count, masterNode)=>
    angle = (360 / count) * (i + 1)
    radians = @app.toRadians(angle)

    rad = masterNode.radius + 20

    x = masterNode.x + (rad * Math.cos(radians))
    y = masterNode.y + (rad * Math.sin(radians))

    node = new ChildNode @app.ctx, name, x, y, 1
    @collection.push node

  newMasterNode: (data)=>
    @collection = []
    node = new Node @app.ctx, data, @app.width/2, @app.height/2, 3
    @collection.push node
    
    @newChildNode(follower, i, data.followers.length, node) for follower,i in data.followers

    @app.hideMask()
