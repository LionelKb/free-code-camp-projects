/*
Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
      return str.repeat(num);
  }
  return "";
}

console.log(repeatStringNumTimes("abc", -1));
console.log(repeatStringNumTimes("*", 3));
console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", 4));
console.log(repeatStringNumTimes("abc", 1));
console.log(repeatStringNumTimes("*", 8));
console.log(repeatStringNumTimes("abc", -2));
