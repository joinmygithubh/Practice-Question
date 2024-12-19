function secondLargest(arr) {
    let largest = -Infinity, second = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second && arr[i] !== largest) {
            second = arr[i];
        }
    }

    return second === -Infinity ? null : second;
}

// Example
const arr = [10, 20, 4, 45, 99];
console.log("Second Largest:", secondLargest(arr)); // Output: 45
