define(function(){

  function countDuplicates(val){
    var store=[];
    var count=1;
    for (var i=0; i<val.length; i++){
      for (var j=i+1; j<val.length; j++){
        if (val[i]===val[j]){
          count++
          break;
        }
      }
    }
    return count;
  }

  function findFirstLargestDupLetters(val){
    var store=[];
    for (var i=0; i<val.split(' ').length; i++){
      store.push({
        index: i,
        word: val.split(' ')[i],
        duplicates: countDuplicates(val.split(' ')[i])
      });
    }
    console.log(JSON.stringify(store));

    for (var i=0 ; i<store.length; i++){
      for (var j=i+1; j<store.length; j++){
        if (store[i].duplicates<store[j].duplicates){
          var temp = store[i];
          store[i] = store[j];
          store[j] = temp;
        }
      }
    }

    if (store[0].duplicates > store[1].duplicates){
      return store[0].word
    }
    else if (store[0].duplicates === store[1].duplicates){
      if (store[0].index<store[1].index) return store[0].word;
      else return store[1].word;
    }
  }

  return findFirstLargestDupLetters

});