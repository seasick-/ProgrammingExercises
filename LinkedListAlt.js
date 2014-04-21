define(function(){

  function LinkedList() {
    this.length = 0;
    this.head = null;
  }

  LinkedList.prototype.add = function(val) {
    var node = {
      data: val,
      next: null
    }
    var current = this.head;

    if (this.head===null) {
      this.head = node;
      return this.head;
    }

    else{
      while(current.next){
        current = current.next
      }
      current.next = node;
    }

    return this.head;
  }

  LinkedList.prototype.getItem = function(index){
    var current = this.head;
    var i=0;

    while (current.next!==null){
      var checkItem = function(index, stop){
        if (i === index){
          console.log(current.data);
        }
        if (stop) return;
      }
      if (index===0) checkItem(0,stop);

      current = current.next;
      i++;

      checkItem(index);
    }
  }

  return LinkedList;
});







