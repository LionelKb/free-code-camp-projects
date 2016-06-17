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

convertHTML("Dolce & Gabbana"); // should return Dolce &​amp; Gabbana.
convertHTML("Hamburgers < Pizza < Tacos"); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
convertHTML("Sixty > twelve"); // should return Sixty &​gt; twelve.
convertHTML('Stuff in "quotation marks"'); // should return Stuff in &​quot;quotation marks&​quot;.
convertHTML("Shindler's List"); // should return Shindler&​apos;s List.
convertHTML("<>"); // should return &​lt;&​gt;.
convertHTML("abc"); // should return abc.
