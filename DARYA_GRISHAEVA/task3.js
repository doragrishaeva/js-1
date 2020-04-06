// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

function toCamelCase (str) {
    //replace dashes, underscores and split str
    var newStr =  str.replace(/-/g, " ").replace(/_/g, " ").split(" ");
    
    // first word - is notChangedPart, all the rest is changedPart
    var notChangedPart = newStr.slice(0, 1).join('');
    var changedPart = newStr.slice(1);
    
    //cycle of getting total words with first Capital letters 
    var i = 0;
    var result = "";
    while (i<changedPart.length) {
      var firstLetterUppercase = changedPart[i][0].toUpperCase();
      var totalWord = (firstLetterUppercase+changedPart[i].slice(1));
      result = result + totalWord;
      i++;
    }
    
   // first word + all the rest words without space and with capital first letter
   return notChangedPart + result;
}
   