// Write a function that takes a sentence (string) and reverses each word in the sentence.

function reverseEveryWordinStr(str) {
    
    //split str
    var splitedStr = str.split(" ");
    
    //split every elem and reverse it
    var reversedStr = splitedStr.map(function(elem) {
      return elem.split("").reverse().join("");
    })
    
    //back to str
    var result = reversedStr.join(" ");
    return result;
};
   