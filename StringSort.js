define(function(){

  function StringSort(str){
    var split = str.split(' ');
    console.log(split);


    for (var each in split){
      var str = split[each].split('');
      for (var i=0; i<str.length; i++){
        for (var j=i+1; j<str.length; j++){
          if ( str[j].charCodeAt(0) <= str[i].charCodeAt(0) ){
            var temp = str[i];
            str[i] = str[j];
            str[j] = temp
          }
        }
      }
      split[each] = str.join('')
    }
    console.log(split)
  }
  return StringSort;
});