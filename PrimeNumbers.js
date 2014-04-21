define(function(){

  function PrimeNumbers(num){
    var temp=[];
    temp.push(2);

    var isPrime;

    for (var i=2; i<=num; ++i)
    {
      isPrime = 1;

      for(var j=2; j<i; ++j){
        if(i%j == 0){
          isPrime = 0;
        }
      }

      if ( isPrime != 0 )
        console.log(i)
    }

    return temp;
  }

  return PrimeNumbers;
})