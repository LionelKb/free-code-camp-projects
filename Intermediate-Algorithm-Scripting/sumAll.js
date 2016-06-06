/*
Sum All Numbers in a Range
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

*/


function sumAll(arr) {
  //return 1;
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);
  var sum = 0;
  for (var i = min+1; i < max; i++) {
    arr.push(i);
  }
  sum = arr.reduce(function(preValue,curValue){
    return preValue + curValue;
  });
  console.log(sum);
  return sum;
}

sumAll([1, 4]);
