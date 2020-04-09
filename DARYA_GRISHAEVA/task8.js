//write a function of sum

function sum (){
    //make an array from pseudoarray 'arguments'
      var newArr = [].slice.call(arguments);
  
    //inner function that will use recursion with itself if the length of the array is bigger than one
      var getSum = function (newArr) {
          return (newArr.length === 1) ? newArr[0] : newArr[0] + getSum(newArr.slice(1));
      };
      return getSum (newArr)
}