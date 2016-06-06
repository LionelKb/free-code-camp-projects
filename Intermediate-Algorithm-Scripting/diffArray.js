/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2);
  newArr = newArr.filter(function(value){
    if ((arr1.indexOf(value) === -1) || (arr2.indexOf(value) === -1)) {
      return value;
    }
  });
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5,6,7], [1, 2, 3, 4, 5]);
