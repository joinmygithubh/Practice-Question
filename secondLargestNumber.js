function secondLargestNumber(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num < largest) {
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;
}
// Example usage



const array = [10, 5, 20, 15, 30];
console.log(secondLargestNumber(array)); // Output: 20
