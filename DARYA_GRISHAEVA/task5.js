//make an expansion of letters

function stringExpansion(str) {

    //function that multiplies letter
    function expandLetter(letter, times) {
        var multipliedLetter = "";
        var counter = 0;
        while (counter<times) {
          multipliedLetter = multipliedLetter + letter;
          counter ++;
        }
    return multipliedLetter;
    }
  
    var result = "";
    var i = 0;
  
    //the way if there is only letters
    var numbers = /\d/g; 
    if (!str.match(numbers)) {
      result = str;
    }
  
    //the way if there is one number then there is one letter and e.t.c
    if (isNaN(+(str[i+1])) === true && isNaN(+(str[i])) === false) {
      while (i<str.length) {
        var times = +(str[i]);
        var letter = str[i+1];
        result = result + expandLetter(letter, times) 
        i+=2;
      }
    }
  
    //the way if there is not only one number before the letter
    if (isNaN(+(str[i])) === false && isNaN(+(str[i+1])) === false) {
      while (i<str.length) {
        var times = +(str[i]);
        var letter = str[i+1];
        result = result + expandLetter(letter, times);
        i++;
      }
      
      //make a string of multiplied letters but without a rest of numbers
      i=0
      var finResult = ""
      while (i<result.length) {
        if (isNaN(+(result[i])) === true) {
          finResult = finResult + result[i];
        }
        i++;
      }
      return finResult;
    }
    return result;
  }
  