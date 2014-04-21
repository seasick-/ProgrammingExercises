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
//  console.log(out);
});

require(['PrimeNumbers'], function(PrimeNumbers){
  var out = PrimeNumbers(50);
//  console.log(out);
});

require(['StringScramble'], function(StringScramble){
  var out = StringScramble('h3llko', 'hello');
//  console.log(out);
});

require(['NumberPermutation'], function(NumberPermutation){
  var out = NumberPermutation(12453);
//  console.log(out);
  var out = NumberPermutation(123);
//  console.log(out);
})

require(['LinkedList'], function(LinkedList){
  var list = new LinkedList();
  list.add(45);
  list.add(49);
  list.add(47);
  list.add(48);
//  console.log(list.getItem(45));
//  console.log(list);
  list.remove(49);

  list.insert(45, 3);
//  console.log(list);
  list.remove(48);
});

require(['LinkedListAlt'], function(LinkedListAlt){
  var list = new LinkedListAlt();
  list.add(23);
//  console.log(list);
  list.add(45);
  list.add(55);
  list.add(75);
//  console.log(list);
  for (var i=0; i<4; i++){
//    list.getItem(i);
  }
});

require(['CountDuplicates'], function(CountDuplicates){
  console.log('this')
  var out = CountDuplicates([5,6,3,2,5,6]);
})

