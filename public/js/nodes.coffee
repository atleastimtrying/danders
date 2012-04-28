class window.Nodes
  constructor: (@app)->
    @collection = []

  draw: =>
    node.draw() for node in @collection

  makeNode: (event)=>
    @newNode 
      x: event.pageX
      y: event.pageY
      repo_count: 4
      name: 'Dan'
      followers: 1

  newChildNode: (name, i)=>
    console.log i
    node = new ChildNode @app.ctx, name, @app.width/2 - i *30, @app.height/2 + 40, 1
    @collection.push node
       
  newMasterNode: (data)=>
    node = new Node @app.ctx, data, @app.width/2, @app.height/2, 3
    @collection.push node
    
    @newChildNode(follower, i) for follower,i in data.followers