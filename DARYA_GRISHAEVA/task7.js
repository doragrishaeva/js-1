//write a function that transform array of numbers in array of function that returns value of initial element

function transform (arr) {

    arr.map(function (elem) {
    
      //return function
    return function(){
    
      //that returns element
    return elem;
    }
    });
} 