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
    console.log('valArr', valArr);

    for (var i=1,j=valArr.length-1; j>=0; j--, i++){
      var currentVal= (function(){
        var out='';
        for (var i=0; i<valArr.length; i++){
          out+=val[i];
        }
        return out;
      }());

      if (Number(valArr.join('')) <= currentVal){
        var move = valArr.pop();
        valArr.splice(valArr.length-i,0,move)
      }
      else {
        console.log('valArr', valArr.join(''));
        break;
      }
    }

  }

  return NumberPermutation;
})

