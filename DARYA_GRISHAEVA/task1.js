// Write a function splitAndMerge

function splitAndMerge(str, sp) {
    //split str
      var strSplited = str.split(" ");
    
    // split every word
      var splitedWords = strSplited.map(function (elem) {
          return elem.split("");
      });
    
    // join all words(elems) in total array
      var result = splitedWords.map(function (elem) {
          return elem.join(sp);
      });

     //back to str
      return result.join(" ");
}
   