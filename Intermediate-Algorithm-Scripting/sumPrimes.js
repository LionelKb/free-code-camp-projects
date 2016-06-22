/*

Sum All Primes


Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime.

*/


function sumPrimes(num) {
  var sum = 0;
  for (var value = 2; value <= num; value++) {
    isPrime = true;
    var divisor = 2;
    while (isPrime && (divisor < value)) {
        isPrime = (value % divisor) !== 0;
        divisor += 1;
      }
    if (isPrime) {
      sum += value;
    }
  }
  console.log(sum);
  return sum;
}

sumPrimes(10); //should return 17.
sumPrimes(977); //should return 73156.
