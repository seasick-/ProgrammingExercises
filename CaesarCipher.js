define(function(){


  function CaesarCipher(str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    var result=[];
    for (var i=0; i<str.length; i++){
      for (var j=0; j<alphabet.length; j++){
        console.log('str[i]:', str[i], 'alphabet[j]:', alphabet[j]);
        if (str[i].toLowerCase() === alphabet[j].toLowerCase()){
          console.log('match!', alphabet[j+2]);
          result.push(alphabet[j+2])
        }
      }
    }
    console.log(result);
  }

  return CaesarCipher
})
