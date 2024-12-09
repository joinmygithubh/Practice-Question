function sumOfSubarray(arr, k) {
    let n = arr.length;
    let currentSum = 0;

    // Calculate the sum of the first subarray of size k
    for (let i = 0; i < k; i++) {
        currentSum += arr[i];
    }

    // Manually display the subarray elements using a loop
    let firstSubarray = [];
    for (let i = 0; i < k; i++) {
        firstSubarray.push(arr[i]);
    }
    console.log(`Sum of subarray [${firstSubarray.join(", ")}] = ${currentSum}`);

    // Slide the window across the array
    for (let i = k; i < n; i++) {
        currentSum = currentSum + arr[i] - arr[i - k];

        // Display the current subarray elements manually
        let currentSubarray = [];
        for (let j = i - k + 1; j <= i; j++) {
            currentSubarray.push(arr[j]);
        }
        console.log(`Sum of subarray [${currentSubarray.join(", ")}] = ${currentSum}`);
    }
}
const arr = [1, 2, 3, 4, 5];
const k = 3;
sumOfSubarray(arr, k);
