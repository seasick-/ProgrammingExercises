define(function(){

  function ReturnDupNumbers(val){
    var temp=[];
    for (var i=0; i<val.length; i++){
      for (var j=i+1; j<val.length; j++){
        if (val[i]===val[j]){
          temp.push(val[i]);
          break;
        }
      }
    }
    return temp;
  }

  return ReturnDupNumbers;
})

