define(function(){

  function LinkedList(){
    this.length = 0;
    this.head = null;
  }

  LinkedList.prototype.getSize = function() {
    return this.length;
  }

  LinkedList.prototype.add = function(data){
    var node = {
      data: data,
      next: null
    }
    var current;

    if (this.head === null){
      this.head = node;
    }
    else{
      current = this.head;

      while (current.next){
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  LinkedList.prototype.getItem = function(val){
    var current = this.head;

    if (current.next === null){
      if (current.data===val) return 'found'
      else return 'not found';
    }

    while(current.next){
      if (current.data === val) return 'found'
      else current = current.next;

      if (current.next === null){
        if (current.data === val) return 'found'
        else return 'not found'
      }
    }
  }

  LinkedList.prototype.remove = function(val){
    var current = this.head;

    if (current.next === null){
      console.log('this');
      if (current.data === val) this.head = null;
      return;
    }

    var indexObj=[];
    var i=0;
    while(current.next){
      indexObj.push({
        current: current,
        index:i
      });
      if (current.next=== null  && current.data === val){
        current.next=null;
        break;
      }
      else{

      }
      current = current.next;
      i++;
    }
  }

  return LinkedList;
});

















