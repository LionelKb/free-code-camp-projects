/*Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var strInArray = str.split(' ');
  var lengthOfWords = strInArray.map(function(word){
    return word.length;
  });
  lengthOfWords.sort(function(length1,length2){
    return length2 - length1;
  });
  return lengthOfWords[0];
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); //6
console.log(findLongestWord("May the force be with you")); //5
console.log(findLongestWord("Google do a barrel roll")); //6
console.log(findLongestWord("What is the average airspeed velocity of an unladen swallow")); //8
console.log(findLongestWord("What if we try a super-long word such as otorhinolaryngology")); //19




