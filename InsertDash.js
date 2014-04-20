define(function(){

  function InsertDash(val){
    var temp=[];
    for (var i=0; i<val.length; i++){
      temp.push(val[i]);

      if (val[i]%2!==0 && val[i+1]%2!==0){
        temp.push('-')
      }
      if (val[i]%2===0 && val[i+1]%2===0){
        temp.push('*')
      }

    }
    return temp;
  }

  return InsertDash;
})