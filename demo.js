function findMissingNumber(arr) {
    let n = arr.length + 1; // Total numbers expected (including the missing one)
    let expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    let actualSum = 0;

    // Calculate the actual sum of array elements
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }

    // Missing number is the difference between expected and actual sum
    return expectedSum - actualSum;
}

let array = [8, 2, 4, 5, 3, 7, 1];
console.log("Missing Number:", findMissingNumber(array));
