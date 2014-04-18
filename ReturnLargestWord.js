define(function(){

  function sort(val){
    var temp;
    for (var i=0; i<val.length; i++){
      for (var j=i+1; j<val.length; j++){
        try{
          if (val[i].length<val[j].length){
            temp=val[i];
            val[i] = val[j];
            val[j] = temp;
          }
        }
        catch(e){console.log(e)};
      }
    }
    return val[0];
  }

  function LetterCountI(str){
    var store=[];
    var split = str.split(' ');
    for (var i=0; i<split.length; i++){
      store.push({
        word: split[i],
        length: split[i].length
      })
    }
    return sort(store);
  }

  return LetterCountI;
})

