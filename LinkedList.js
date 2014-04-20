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
    return this;
  }

  LinkedList.prototype.remove = function(val){
    var i=0;
    var current = this.head;
    var listOBJ =[];

    while (current.next){
//      console.log('current', current);
      var push = function() {
        listOBJ.push({
          data: current.data,
          next: current.next
        });
      }
      push();
      current = current.next;
      if (current.next === null) push();
    };

    for (var each in listOBJ){
      if (listOBJ[each].data === val){
        listOBJ.splice(each,1);
      }
    }
    for (var i=0; i<listOBJ.length-1; i++){
      console.log(i);
      listOBJ[i].next = listOBJ[i+1]
    }
    listOBJ[i].next = null;
    this.head = listOBJ[0];
  }

  LinkedList.prototype.makeArray = function() {
    var i=0;
    var current = this.head;
    var listOBJ =[];

    while (current.next){
      var push = function() {
        listOBJ.push({
          data: current.data,
          next: current.next
        });
      }
      push();
      current = current.next;
      if (current.next === null) push();
    };
    return listOBJ;
  }

  LinkedList.prototype.insert = function(val, pos){
    var listOBJ = this.makeArray();
    var temp=[];
    for (var i=0; i<listOBJ.length; i++){
      temp.push(listOBJ[i]);
      if (pos === i+1) {
        temp.push({
          data: val,
          next: listOBJ[i+1]
        });
      }
    }
    for (var i=0; i<temp.length-1; i++){
      temp[i].next = temp[i+1]
    }
    temp[i].next = null;
    this.head = temp[0];
    console.log(this.head);
  }

  return LinkedList;
});