let n = arr.length;
    let subarraySums = [];

    // Slide a window of size 'k' through the array
    for (let k = 1; k <= n; k++) { // k is the window size, from 1 to n
        let currentSum = 0;

        // Calculate sum for the first window of size k
        for (let i = 0; i < k; i++) {
            currentSum += arr[i];
        }
        subarraySums.push(currentSum);

        // Now slide the window across the array
        for (let i = k; i < n; i++) {
            currentSum += arr[i] - arr[i - k]; // Add new element, remove the old one
            subarraySums.push(currentSum);
        }
    }

    return subarraySums;