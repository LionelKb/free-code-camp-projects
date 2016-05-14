/*
Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

*/

function destroyer(arr) {
  // Remove all the values
  var args = Array.from(arguments);
  //var arr = args.shift();
  var filtered = arr.filter(function(value){
    return args.indexOf(value) == -1 ;
  });
  console.log(filtered);
  return filtered;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].


