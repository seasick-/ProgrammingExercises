define(function(){

  function StringScramble(val1, val2){
    var makeArray = function(val){
      var temp=[];
      for (var i=0; i<val.length; i++){
        temp.push(val[i]);
      }
      return temp;
    }
    var str1 = makeArray(val1);
    var str2 = makeArray(val2);

    for (var i=0; i<str2.length; i++){
      for (var j=0; j<str1.length; j++){
        if (str2[i] === str1[j]){
          str1.splice(j,1);
        }
      }
    }
    if (str1.length===0) return true
    else return false;
  }

  return StringScramble;
})

