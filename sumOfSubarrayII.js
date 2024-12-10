function sumOfSubArrayII(n, k, arr) {
    let windowSum = 0; // Initialize the sum of the current sliding window
    let start = 0; // The starting index of the sliding window

    for (let end = 0; end < n; end++) { 
        // Iterate through the array, expanding the window by moving the `end` pointer
        windowSum += arr[end]; // Add the current element to the `windowSum`

        while (windowSum > k) { 
            // If the sum of the current window exceeds `k`, shrink the window from the left
            windowSum -= arr[start]; // Remove the element at the `start` pointer from `windowSum`
            start++; // Move the `start` pointer to the right
        }

        if (windowSum === k) { 
            // Check if the current window's sum equals `k`
            console.log("Yes"); // If found, print "Yes"
            return; // Exit the function, as we only need to determine if a subarray exists
        }
    }

    console.log("No"); // If no subarray with sum `k` is found after iterating through the array
}

let n=5, k= 3
let arr =[1, 2, 1, 3, 4]
let n1=4, k1= 5
let arr1 =[1, 2, 1, 3]
let n2=3, k2= 2
let arr2 =[1, 2, 1]

sumOfSubArrayII(n,k,arr)
sumOfSubArrayII(n1,k1,arr1)
sumOfSubArrayII(n2,k2,arr2);