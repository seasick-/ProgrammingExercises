require(['ReturnLargestWord'],
  function(ReturnLargestWord){
    var out = ReturnLargestWord('Strings this Thisz a string fuhgettaboutIT!');
//    console.log(out);
});

require(['ReturnDupNumbers'],
    function(ReturnDupNumbers){
      var out = ReturnDupNumbers([45,576,34,45,2,34,4]);
//      console.log(out);
});

require(['ReturnDupNumbers'],
    function(ReturnDupNumbers){
      var out = ReturnDupNumbers([45,576,34,45,2,34,4]);
//      console.log(out);
});

require(['ConsecutiveNumbers'],
    function(ConsecutiveNumbers) {
      var out = ConsecutiveNumbers([4,8,1,19,6]);
//      console.log(out);
});

require(['InsertDash'], function(InsertDash) {
  var out = InsertDash('56647304');
//  console.log(out);
});

require(['Palindrome'], function(Palindrome){
  var out = Palindrome('tttaattt');
//  console.log(out);
});

require(['TwoCharSpaceCheck'], function(TwoCharSpaceCheck){
  var out = TwoCharSpaceCheck('after badly');
  console.log(out);
});

require(['PrimeNumbers'], function(PrimeNumbers){
  var out = PrimeNumbers(50);
})
