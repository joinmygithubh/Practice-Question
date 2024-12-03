function solve(x) {
  let num = BigInt(x);

  let largestPowerOf3 = BigInt(3) ** BigInt(39);

  if (num > 0n && largestPowerOf3 % num === 0n) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

let x = 2;
let x1 = 3;
let x2= 4;

solve(x)
solve(x1)
solve(x2)