class window.Nodes
  constructor: (@ctx)->
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

  newNode: (data)->
    node = new Node @ctx, data
    @collection.push node