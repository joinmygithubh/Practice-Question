function isPrime(num) {
  if (num <= 1) {
    console.log("Not a prime Number");
    return;
  }
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      console.log("Not a prime Number");
      return; // Exit the function as we found a divisor
    }
  }
  console.log("Prime Number");
}
isPrime(4);

