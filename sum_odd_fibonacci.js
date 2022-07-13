// This is a stupid answer by the way xDDD

function sumFibs(num) {
  
  // First three elements of the Fibonacci sequence (To make things easy)
  var fibonacci = [1, 1, 2]
  
  // Continue Fibonacci sequence if the 'num' is greater the last element of the array 'fibonacci' which is 2
  for (let i = 0; i < fibonacci.length; i++) {
    if (num > fibonacci[fibonacci.length - 1]) {
      fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2])
  }
}

  // Remove elements greater than 'num'
  const fib = fibonacci.filter(number => number <= num)
  
  // Select the odd elements
  const odd = fib.filter(number => number % 2 == 1)
  
  // Sum them
  const plus = odd.reduce((a, b) => a + b, 0)

  return plus 
}
