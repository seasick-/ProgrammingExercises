define(function(){

  function CountDuplicates(arr){
    this.sorted = (function() {
      for (var i=0; i<arr.length; i++){
        for (var j=i+1; j<arr.length; j++){
          if (arr[i]<arr[j]){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
          }
        }
      }
      return arr;
    }())

    console.log(this.sorted);

    var count=1;
    var temp=[];
    for (var i=0; i<this.sorted.length; i++){
      for (var j=i+1; j<this.sorted.length; j++){
        if (this.sorted[i] === this.sorted[j]) {
          this.sorted.splice(j,1);
          count++
        }
      }
      temp.push({
        num: this.sorted[i],
        count: count
      });
      count=1;
    }
    console.log(temp);
  }

  return CountDuplicates;
})

