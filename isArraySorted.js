function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

// Example
console.log(isSorted([1, 2, 3, 4, 5])); // Output: true
console.log(isSorted([5, 4, 3, 2, 1])); // Output: false
