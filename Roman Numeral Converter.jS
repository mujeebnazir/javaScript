/*Convert the given number into a roman numeral.*/
function convertToRoman(num) {
  const romanNumerals = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
   1000: "M"
  }

  // return value
  let romanNumeral = ""

  while (num !== 0) {
    if (num >= 1000) {
      romanNumeral += romanNumerals[1000];
      num -= 1000;
    }
    else if(num >= 900){
      romanNumeral += romanNumerals[900];
      num -= 900;
    }
    else if(num >= 500){
      romanNumeral += romanNumerals[500];
      num -= 500;
    }
    else if(num >= 400){
      romanNumeral += romanNumerals[400];
      num -= 400;
    }
    else if(num >=100){
      romanNumeral += romanNumerals[100];
      num -= 100;
    }
    else if(num >= 90){
      romanNumeral += romanNumerals[90];
      num -= 90;
    }
    else if(num >=50){
      romanNumeral += romanNumerals[50];
      num -= 50;
    }
    else if(num >= 40){
      romanNumeral += romanNumerals[40];
      num -= 40;
    }
    else if(num >=10){
      romanNumeral += romanNumerals[10];
      num -= 10;
    }
    else if(num >=9){
      romanNumeral += romanNumerals[9];
      num -= 9;
    }
    else if(num >=5){
      romanNumeral += romanNumerals[5];
      num -= 5;
    }
    else if(num >= 4){
      romanNumeral += romanNumerals[4];
      num -= 4;
    }
    else {
      romanNumeral += romanNumerals[1];
      num -= 1;
  }
  }

  return romanNumeral
}
