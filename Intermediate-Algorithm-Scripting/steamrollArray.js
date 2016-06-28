/*

Steamroller


Flatten a nested array. You must account for varying levels of nesting.

*/


function steamrollArray(arr) {
  // I'm a steamroller, baby
  var flattenArr = [];
  var args = Array.from(arguments);
  arr = args[0];
  flattenArr = args[1] || [];
  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      steamrollArray(arr[i],flattenArr);
    }
    else {
//      console.log(arr[i]);
      flattenArr.push(arr[i]);
    }
  }
  //console.log(flattenArr);
  return flattenArr;
}


steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
