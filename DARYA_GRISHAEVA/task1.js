// Write a function splitAndMerge

function splitAndMerge(str, sp) {
  //split str
    var strSplited = str.split(" ");
  
  // split every word and make space between the letters
    var result = strSplited.map(function (elem) {
        return elem.split("").join(sp)
    });

   //back to str
    return result.join(" ")
}