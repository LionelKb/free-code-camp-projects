/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  str = str.toLowerCase();
  var strAsArrayOfWords = str.split(' ');
  str = strAsArrayOfWords.map(function(word){
    return word[0].toUpperCase()+word.slice(1,word.length);
  }).join(' ');
  return str;
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));


