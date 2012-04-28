class window.Nodes
  constructor: (@app)->
    @collection = []

  draw: =>
    node.draw() for node in @collection

  newChildNode: (name, i)=>
    node = new ChildNode @app.ctx, name, @app.width/2 - i *30, @app.height/2 + 40, 1
    @collection.push node
       
  newMasterNode: (data)=>
    @collection = []
    node = new Node @app.ctx, data, @app.width/2, @app.height/2, 3
    @collection.push node
    
    @newChildNode(follower, i) for follower,i in data.followers