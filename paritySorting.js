// To solve the problem where you need to sort the odd and even numbers separately and arrange them in ascending order 
//(odd numbers first followed by even numbers), you can follow these steps:
// Separate the odd and even numbers.
// Sort the odd numbers in ascending order.
// Sort the even numbers in ascending order.
// Concatenate the odd numbers and even numbers together to get the final result.

function solve(N, arr) {
  let odd = [];
  let even = [];
  for (let i = 0; i < N; i++) {
    if (arr[i] % 2 == 1) {
      odd.push(arr[i]);
    }
    else{
      even.push(arr[i])
    }
  }
  for (let i = 0; i < odd.length; i++) {
    for (let j = 0; j < odd.length - i - 1; j++) {
      if (odd[j] > odd[j + 1]) {
        let temp = odd[j];
        odd[j] = odd[j + 1];
        odd[j + 1] = temp;
      }
    }
  }
  for (let i = 0; i < even.length; i++) {
    for (let j = 0; j < even.length - i - 1; j++) {
      if (even[j] > even[j + 1]) {
        let temp = even[j];
        even[j] = even[j + 1];
        even[j + 1] = temp;
      }
    }
  }

  let result = odd.concat(even);
  console.log(result.join(" "));
}

let arr = [2, 5, 1, 4, 2];

solve(5, arr);
