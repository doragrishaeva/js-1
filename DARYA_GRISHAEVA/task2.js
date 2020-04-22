//Convert a hash into an array

function convertHashInArray (object) {
  result = []
  
  //iterating through object and pushing key-value pairs in a result array
  for (var key in object) {
    result.push([key, object[key]])
  }
  return result
}