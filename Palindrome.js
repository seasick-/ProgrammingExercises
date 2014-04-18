define(function(){

  function Palindrome(str){
    for (var i= 0, j=str.length-1; i<j; i++, j--){
      if (str[i]!==str[j]){
        return false
      }
    }
    return true;
  }

  return Palindrome;
})

