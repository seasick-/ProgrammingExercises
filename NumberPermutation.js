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

    for (var i=1,j=valArr.length-1; j>=0; j--, i++){
      if (Number(valArr.join('')) <= val){
        var move = valArr.pop();
        valArr.splice(valArr.length-i,0,move)
      }
      else {
//        console.log(valArr.join(''));
        return valArr.join('');
      }
    }
  }
  return NumberPermutation;
});