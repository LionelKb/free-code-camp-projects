/*

Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

*/



function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var specialChars = [" ","_"];
  function replacer (value) {
    if (specialChars.indexOf(value) > -1){
      return '-';
    }
    else if (value == value.toUpperCase()) {
      return '-'+value.toLowerCase();
    }

  }

  str = str.replace(/[A-Z]| |_/g, replacer);
  str = str.replace(/--/g, '-');
  str = str.replace(/^-/, '');
  console.log(str);

  return str;
}

spinalCase("This Is Spinal Tap"); //should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); //should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); //should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); //should return "teletubbies-say-eh-oh".
spinalCase("AllThe-small Things"); //should return "all-the-small-things".
