define(function(){

  function sortNum(val){
    var results=[];
    var val = String(val).split('');
    console.log('val', val)
    for (var i=0; i<val.length; i++){
      var count=1;
      for (var j=i+1; j<val.length; j++){
        if (val[i] === val[j]){
          count++;
          val.splice(j,1);
          j--;
        }
      }
      if (count>=2){
        results.push({
          value: val[i],
          count: count
        })
      }
      console.log(val[i], count)
    }
    return JSON.stringify(results, null, 2);
  }


  function TripleDouble(val1, val2){
    var results=[];
    var VAL1 = sortNum(val1);
    var VAL2 = sortNum(val2);
    if (VAL1.length > VAL2.length){
      var temp = VAL1;
      VAL1 = VAL2;
      VAL2 = temp;
    }
    console.log(VAL1)
    console.log(VAL2)
    for (var i=0; i<VAL2.length; i++){
      for (var j=i+1; j<VAL2.length; j++){
        try{
          console.log(VAL1[i])
          if (VAL1[i].value === VAL2[j].value){
            results.push(VAL1);
            break;
          }
        }
        catch(e){}
      }
    }
//    console.log(results);
  }

  return TripleDouble;
})

