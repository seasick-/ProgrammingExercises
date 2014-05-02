define(function(){
  function DistinctList(arr){
    var results=[];
    for (var i=0; i<arr.length; i++){
      var count=1;
      for (var j=i+1; j<arr.length; j++){
        if (arr[i] === arr[j]){
          count++;
          arr.splice(i,1);
          arr.splice(j,1);
        }
      }
      results.push({
        index: arr[i],
        count: count
      })
    }
    for (var i=0; i<results.length; i++){
      for (var j=i+1; j<results.length; j++){
        if (results[i].count < results[j].count){
          var temp = results[i];
          results[i] = results[j];
          results[j] = temp;
        }
      }
    }
    console.log(JSON.stringify(results, null, 2));
  }
  return DistinctList;
});