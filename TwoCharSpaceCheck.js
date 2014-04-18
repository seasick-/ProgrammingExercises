define(function(){

  function TwoCharSpaceCheck(str){
    var temp=[];
    for (var i=0; i<str.length; i++){
      try{
        temp.push({
          letter: str[i],
          forward: (function() {
            if(str[i]==='a' && str[i+4]==='b') return true
            else return false;
          }())
        });
      }
      catch(e){};
    }
    for (var i=0; i<temp.length; i++){
      if (temp[i].forward === true) {
        return true;
      }
    }
    return false;
  }

  return TwoCharSpaceCheck;
})

