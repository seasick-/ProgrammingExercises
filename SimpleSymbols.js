define(function(){

  function SimpleSymbols(str){
    var strCount=0;
    for (var i=0; i<str.length; i++){
      console.log(str[i], str.charCodeAt(i));
      if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
        strCount++;
      }
    }

    var count=0;
    for (var i=0; i<str.length; i++){
      if (str.charCodeAt(i) === 43 && str.charCodeAt(i+1)>=97 && str.charCodeAt(i+2)===43 ){
        count++;
        console.log(str[i+1]);
      }
    }

    if (strCount === count){
      console.log('true')
    }
  }

  return SimpleSymbols
})