define(function(){

  function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    this.edgeTo=[];
    for (var i = 0; i < this.vertices; ++i) {
      this.adj[i] = [];
      this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
    this.bfs = bfs;
    this.dfs = dfs;
    this.marked = [];
    for (var i = 0; i < this.vertices; ++i) {
      this.marked[i] = false;
    }
  }

  function addEdge(v,w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }

  function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
      console.log(i + " -> ");
      for (var j = 0; j < this.vertices; ++j) {
        if (this.adj[i][j] != undefined)
          console.log(this.adj[i][j] + ' '+'\r');
      }
    }
  }

  function dfs(v) {
    this.marked[v] = true;
    if (this.adj[v] != undefined) {
      console.log("Visited vertex: " + v);
    }

    for (var w in this.adj[v]) {
      var test = this.adj[v][w];
      if (!this.marked[this.adj[v][w]]) {
        this.dfs(this.adj[v][w]);
      }
    }
  }

  function bfs(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s); // add to back of queue
    while (queue.length > 0) {
      var v = queue.shift(); // remove from front of queue
      if (v != undefined) {
        console.log("Visited vertex: " + v);
        console.log('this');
      }
      for  (var w in this.adj[v]) {
        if (!this.marked[this.adj[v][w]]) {
          this.edgeTo[this.adj[v][w]] = v;
          this.marked[this.adj[v][w]] = true;
          queue.push(this.adj[v][w]);
        }
      }
    }
  }



  return Graph;
});