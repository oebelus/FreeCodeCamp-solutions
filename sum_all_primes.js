function sumPrimes(num) {

let arr = []
  
  // Set a function that verifies if a number is prime
  function isPrime(x) {
    
    if (x < 2) {return false}

    for (let i = 2; i < x; i++) {
      if(x % i == 0) {
        return false
     }   
    }
    return true
  } 

let current = 2

// Make an array that contains all the numbers between 2 and 'num'
while (current <= num) {
    arr.push(current)
    current++
  }

// Filter the array as it contains only primes
let prime = arr.filter(e => isPrime(e))

// Sum all the element of 'prime' array
return prime.reduce((a, b) => a + b)

}
