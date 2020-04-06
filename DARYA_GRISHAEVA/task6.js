//find largest and smallest number from arguments 

function largest () {
    var i = 0;
    var largest = arguments[i];
  
   //if arguments[i] more than current 'largest', arguments[i] becomes a new 'largest'
    for (var i=0; i<arguments.length; i++) {
      if (largest<arguments[i]) {
        largest = arguments[i];
      }  
    }
    return largest;
}

function smallest () {
    var i = 0;
    var smallest = arguments[i];
      
    //if arguments[i] smaller than current 'smallest', arguments[i] becomes a new 'smallest'
    for (var i=0; i<arguments.length; i++) {
      if (arguments[i]<smallest) {
        smallest = arguments[i];
      }  
    }
    return smallest;
}