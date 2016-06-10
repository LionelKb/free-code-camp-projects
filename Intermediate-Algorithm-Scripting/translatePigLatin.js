/*

Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

*/

function translatePigLatin(str) {
  var vowels = ['a','e','o','u','i'];
  var arrOfChars = str.split('');
  if (vowels.indexOf(arrOfChars[0]) > -1) {
    arrOfChars.push("way");
  }
  else {
    i = 0;
    var firstConsonants=[];
    while (vowels.indexOf(arrOfChars[i]) === -1) {
      firstConsonants.push(arrOfChars[i]);
      i++;
    }
    arrOfChars = arrOfChars.slice(firstConsonants.length);
    arrOfChars.push(firstConsonants.join(''));
    arrOfChars.push("ay");
  }
  str = arrOfChars.join('');
  console.log(str);
  return str;
}

translatePigLatin("glove");
