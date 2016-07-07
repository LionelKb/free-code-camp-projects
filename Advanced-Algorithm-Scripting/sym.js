/*

Symmetric Difference

Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you ; //should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


*/

function sym(args) {
  args = Array.from(arguments);

  // This function delete the duplicates values in an array
  function deleteDuplicates (arr) {
    var uniqueArray = arr.filter(function(item, pos) {
      return arr.indexOf(item) == pos; // Keep only the items which are not present in uniqueArray
    });
    return uniqueArray;
  }

  // This function return the elements which belongs to setA but do not belongs to setB
  function relativeComplement(setA,setB) {
    return setA.filter(function (value) {
      return setB.indexOf(value) === -1 ;
    });
  }

  // This function returns all the elements containing in A and not in B and vice-versa
  function completeRelativeComplement(setA,setB) {
    var result = relativeComplement(setA,setB).concat(relativeComplement(setB,setA));
    result = deleteDuplicates(result);
    return result;
  }

  // Initialization of the result. Necessarry when the arguments given are just two.
  var result= completeRelativeComplement(args[0],args[1]) ;
  for (var i = 2; i <= args.length-1; i++) { // Start the loop from the 3rd element, if it exists
    result = completeRelativeComplement(result,args[i]);
  }
  console.log(result);
  return result;

}


sym([1, 2, 3], [5, 2, 1, 4]) ; //should return [3, 4, 5].
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]) ; //should return [1, 4, 5]
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) ; //should return [1, 4, 5].
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]) ; //should return [1, 4, 5]
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) ; //should return [2, 3, 4, 6, 7].
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]) ; //should contain only five elements.
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) ; //should return [1, 2, 4, 5, 6, 7, 8, 9].

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]) ; //should contain only eight elements.



