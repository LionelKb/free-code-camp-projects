/*
Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

*/

function convertToRoman(num) {
  var combinations = {
    0: "",
    1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI", 7: "VII", 8: "VIII", 9: "IX",
    10: "X", 20: "XX",30: "XXX",40: "XL",50: "L",60: "LX",70: "LXX",80: "LXXX",90: "XC",
    100: "C",200: "CC",300: "CCC",400: "CD",500: "D",600: "DC",700: "DCC",800: "DCCC",900: "CM",
    1000: "M"
  };

  var thousands = Math.floor(num/1000);
  var romanNumber =combinations["1000"].repeat(thousands);
  var thousands = thousands * 1000;
  var hundreds = Math.floor((num - thousands) / 100)*100;
  var tens = Math.floor((num - thousands - hundreds) / 10)*10;
  var ones = num - thousands - hundreds - tens;

  romanNumber += combinations[hundreds.toString()] +
    combinations[tens.toString()] +
    combinations[ones.toString()];

  console.log(romanNumber);
  return romanNumber;
}

convertToRoman(2014);
