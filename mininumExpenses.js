function minimumExpenses(n, k, arr) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i];
    }
    let temp = sum;
    for (let i = k; i < n; i++) {
        sum = sum + arr[i] - arr[i - k];
       if(sum<temp){    // sum = Math.min(sum, temp);  //minSum = Math.min(minSum, currentSum);
       temp = sum
   }
    }
    console.log(temp);
}
let n =5, k = 3
let arr = [9, 9, -5, 9, 5]
minimumExpenses(n,k,arr) 

// function minimumExpenses(n, k, arr) {
//     let currentSum = 0;

//     // Calculate the sum of the first subarray of size k
//     for (let i = 0; i < k; i++) {
//         currentSum += arr[i];
//     }

//     let minSum = currentSum;

//     // Slide the window and calculate the sum for the rest of the subarrays
//     for (let i = k; i < n; i++) {
//         currentSum = currentSum + arr[i] - arr[i - k];
//         minSum = Math.min(minSum, currentSum);
//     }

//     return minSum;
// }
