//make an expansion of letters

function stringExpansion(str) {
  var regExp = /(\d)(\D)/gi;
  var regExp1 = /\d/g;
 
  var almostResult = str.replace(regExp, function(match, n1, n2){ 
  return match.replace(match, n2).repeat(n1);
 });
 
  var result = almostResult.replace(regExp1, '');          
  return result              
}
  