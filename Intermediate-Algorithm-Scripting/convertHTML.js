/*

Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

*/

function convertHTML(str) {
  // &colon;&rpar;
  var htmlConverter = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  function replacer(value) {
      return htmlConverter[value];
  }

  str = str.replace(/&|'|"|<|>/g,replacer);
  console.log(str);
  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos")
