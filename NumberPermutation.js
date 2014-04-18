define(function(){

  function NumberPermutation(val){
    var valArr = (function(){
      val = String(val);
      var temp=[];
      for (var i=0; i<val.length; i++){
        temp.push(val[i]);
      }
      return temp;
    }());
    console.log(valArr);
//    for (var i=val.length-1; i=0; i--){
//
//    }
//    valArr.splice(2,0);
    var move = valArr.pop()
    valArr.splice(valArr.length-1,0,move);
    console.log(valArr);
  }


  return NumberPermutation;
})

