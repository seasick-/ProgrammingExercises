define(function(){

  function PatternChaser(str){
    var arr = str.split('');
    console.log(arr);
    var patterns = [];
    for (var i=0; i<arr.length-1; i++){
      patterns.push([]);
    }

    for (var i=0; i<arr.length; i++){
      var temp=arr[i];
      for (var j=i+1; j<arr.length; j++){
        temp+=arr[j];
        patterns[i].push({
          word: temp,
          count: i
        });
      }
    }

//    console.log(JSON.stringify( patterns,null,2));

    for (var each in patterns){
      for (var i in patterns[each]){
        for (var comb in patterns[each][i]){
//          console.log(patterns[each][i][comb])
          for (var j=0; j<str.length; j++){
            var count=0
            for (var k= 0, j=++j; k<patterns[each][i][comb].length; k++){
              console.log(patterns[each][i][comb][j], patterns[each][i][comb][k])
              if (str[j] === patterns[each][i][comb][k]){
                count++;
              }
              if (count === patterns[each][i][comb].length-1){
                console.log('combination',patterns[each][i][comb]);
              }
            }
          }
        }
      }
    }

//    console.log(JSON.stringify( patterns,null,2));

  }
  return PatternChaser;
});