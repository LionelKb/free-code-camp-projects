
/*
Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.


Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()


*/

function fearNotLetter(str) {
  var missingLetter;
  for (var i = 0; i < str.length - 1; i++) {
    if ((str.charCodeAt(i+1) - str.charCodeAt(i)) != 1) {
      missingLetter = String.fromCharCode(str.charCodeAt(i) + 1);
      console.log(missingLetter);
      return missingLetter;
    }
  }
  return missingLetter;
}

fearNotLetter("abce");
