/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrayInGroups = [];
  var endOfSlice;
  var subArray=[];
  for (var i=0; i< arr.length/size; i++) {
    endOfSlice = i * size + size;
    subArray = arr.slice(i*size,endOfSlice);
    arrayInGroups.push(subArray);
  }
  console.log(arrayInGroups);
  return arrayInGroups;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); // should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]

