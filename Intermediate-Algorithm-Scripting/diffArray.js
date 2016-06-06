/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var newArr1 = arr1.filter(function(value){
    if (arr2.indexOf(value) === -1) {
      return value;
    }
  });

  var newArr2 = arr2.filter(function(value){
    if (arr1.indexOf(value) === -1) {
      return value;
    }
  });

  newArr = newArr1.concat(newArr2);
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5,6,7], [1, 2, 3, 4, 5]);
/*
Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

*/


function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  var newArr1 = arr1.filter(function(value){
    if (arr2.indexOf(value) === -1) {
      return value;
    }
  });

  var newArr2 = arr2.filter(function(value){
    if (arr1.indexOf(value) === -1) {
      return value;
    }
  });

  newArr = newArr1.concat(newArr2);
  console.log(newArr);
  return newArr;
}

diffArray([1, 2, 3, 5,6,7], [1, 2, 3, 4, 5]);
