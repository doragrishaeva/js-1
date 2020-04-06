//Convert a hash into an array

function convertHashInArray (hash) {
  
    //recieving of property names
    var result1 = Object.keys(hash);
    
    //recieveing of property values
    var result2 = [];
    for(key in hash) { 
      result2.push(hash[key]);
    } 

   //merging 2 elements from different array in new array
    function makeArrayFromTwoElemsOfDifferentArrays (name, value, index) {
      
      var firstPart = name[index];
      var secondPart = value[index];
      var result = [];
      
      result.push(firstPart);
      result.push(secondPart);
      return result;
    }
  
    //call the function (times depends on length result1 or result2)
    counter = 0;
    newArr = [];
    while(counter<result1.length) {
    newResult = makeArrayFromTwoElemsOfDifferentArrays(result1, result2, counter);
    newArr.push(newResult);
    counter ++;
    
    }
    return newArr;
    
}