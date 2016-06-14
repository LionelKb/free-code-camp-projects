/*
Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/


function booWho(bool) {
  // What is the new fad diet for ghost developers? The Boolean.
  if (bool === 1 || bool === 0) {
    return false;
  }
  bool = bool == Boolean(true) || bool == Boolean(false);
  console.log(bool);
  return bool;
}

booWho(false);
