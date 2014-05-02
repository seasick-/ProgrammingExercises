define(function(){

  function secondGreatLow(arr){
    for (var i=0; i<arr.length; i++){
      for (var j=i+1; j<arr.length; j++){
        if (arr[i] < arr[j]){
          var temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp
        }
      }
    }

    //remove duplicates here
    for (var i=0; i<arr.length; i++){
      for (var j=i+1; j<arr.length; j++){
        if (arr[i] === arr[j]){
          arr.splice(j, 1);
        }
      }
    }


    console.log(arr[0], arr[arr.length-2]);
  }

  return secondGreatLow
})