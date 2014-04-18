define(function(){

  function PrimeNumbers(num){
    var temp=[];
    temp.push(2);
    for (var i=3; i<num; i++){
      if(i%i !==0){
        temp.push(i);
      }
    }
    console.log(temp);
  }

  return PrimeNumbers;
})

