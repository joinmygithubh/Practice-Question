function countEvenSumSubarrays(arr, n) {
    let evenCount = 1; 
    let oddCount = 0;
    let currentSum = 0;
    let result = 0;

    for (let i = 0; i < n; i++) {
        currentSum += arr[i];
        if (currentSum % 2 === 0) {
            result += evenCount;
            evenCount++;
        } else {
            result += oddCount;
            oddCount++;
        }
    }

    
    console.log(result)
}