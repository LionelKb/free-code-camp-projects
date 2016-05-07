/*
Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var numberOfDots = 3; // 0 or 3
  var endOfSlice = str.length; // 0 to 3
  var minusNum = 3;
  if (str.length > num){
    if (num < 3) {
      minusNum = 0;
    }
    endOfSlice = num-minusNum;
    numberOfDots = 3;
  }
  else {
    numberOfDots = 0;
  }
  console.log(str.slice(0,endOfSlice) + ".".repeat(numberOfDots));
  return str.slice(0,endOfSlice) + ".".repeat(numberOfDots);
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14); //should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); // should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1);  //should return "A...".
truncateString("Absolutely Longer", 2) ; //should return "Ab...".
