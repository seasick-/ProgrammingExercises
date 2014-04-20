define(function(){

  function ConsecutiveNumbers(val){
    var minANDmax = function() {
      for (var i=0; i<val.length; i++){
        for (var j=i+1; j<val.length; j++){
          if (val[i]>val[j]){
            var temp = val[i];
            val[i] = val[j];
            val[j] = temp;
          }
        }
      }
      return val;
    }

    var sorted = minANDmax();
    var temp=[];
    for (var i=0; i<sorted.length; i++){
      for (var j=val[i]+1; j<val[i+1]; j++){
        temp.push(j);
      }
    }
    return temp;
  }
  return ConsecutiveNumbers;
});