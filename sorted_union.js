function uniteUnique(arr) {
  let newArr = []
  let intArr = []
  
  // Group the arrays into one array as follows: [ [ 1, 3, 2 ], [ 5, 2, 1, 4 ], [ 2, 1 ] ]
  for (var i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i])
  }

  // One array without any nested array as follows: [ '1', '3', '2', '5', '2', '1', '4', '2', '1' ], note that the elements are strings
  let separatedArgs = newArr.toString().split(',')
  
  // Convert the elements to integer, we obtain: [ 1, 3, 2, 5, 2, 1, 4, 2, 1 ]
  for (let j = 0; j < separatedArgs.length; j++) {
    intArr.push(parseInt(separatedArgs[j]))
  }

  let uniqueChars = [...new Set(intArr)];
  return uniqueChars //[ 1, 3, 2, 5, 4 ]
  
}
