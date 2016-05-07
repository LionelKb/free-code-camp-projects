/*Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
  // Good luck!
  str = str.toLowerCase();
  str = str.replace(/[^a-z0-9]/gi,'');
  var i = 0;
  var strLength = str.length;
  while (i <= (strLength/2)) {
    if (str[i] == str[strLength - i - 1]) {
      i++;
    }
    else {
      return false;
    }
  }
  return true;
}

console.log(palindrome("race%car")); //True
console.log(palindrome("toot")); //True
console.log(palindrome("e1ye")); //True
console.log(palindrome("race%car")); //True
console.log(palindrome("race%ca")); //False
console.log(palindrome("not a palindrome")); //True
console.log(palindrome("never odd or even")); //True
console.log(palindrome("A man, a plan, a canal. Panama")); //True
console.log(palindrome("race%car")); //True
