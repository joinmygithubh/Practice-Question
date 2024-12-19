function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return { min, max };
}

// Example
const arr = [3, 5, 1, 9, 2];
const result = findMinMax(arr);
console.log("Smallest:", result.min); // Output: 1
console.log("Largest:", result.max); // Output: 9
