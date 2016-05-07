/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

*/
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.slice(-(target.length)) == target;
}

console.log(confirmEnding("Bastian", "an"));
console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"));
console.log(confirmEnding("He has to give me a new name", "name"));
console.log(confirmEnding("He has to give me a new name", "me"));
console.log(confirmEnding("He has to give me a new name", "na"));
console.log(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain"));
