//countdown from number till zero 

function countDown(number) {
    //starts from number
    var currentNumber = number;
    
    //logs numbers one by one from currentNumber
    var timerId = setInterval(function() {
      console.log(currentNumber);
      currentNumber--;
      
      //stop if currentNumber is zero
      if (currentNumber < 0) {
        clearInterval(timerId);
      }
      
    }, 1000);
}