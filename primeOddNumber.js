function primeOddNumber(num) {
  for (let i = 3; i <= num; i += 2) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}

let num = 15;
primeOddNumber(num);
