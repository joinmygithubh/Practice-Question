//Two Pointers   //Type 1

function minLifeboats(weights, n, k) {
  weights.sort((a, b) => a - b);
  let i = 0;
  let j = n - 1;
  let count = 0;
  while (i <= j) {
    sum = weights[i] + weights[j];
    if (sum <= k) {
      i++;
    }
    count++;
    j--;
  }
  console.log(count);
}


let n =4, k=5
let weights =[3, 5, 3 ,4]
let n2 =4; k2=3
let weights2 = [1, 2, 2, 3]