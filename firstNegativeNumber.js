function FindNegativeNumber(arr, n, k) {
    let bag = ""; // Initialize bag as an empty string
    for (let i = 0; i <= n - k; i++) {
        let count = 0;
        let j = i;
        let flag = true;
        // Check the current window of size k
        while (count < k) {
            if (arr[j] < 0) {
                bag += arr[j] + " "; // Add the negative number to the bag
                flag = false;
                break; // Exit the loop once the first negative number is found
            }
            count++;
            j++;
        }
        if (flag) {
            bag += "0 "; // Add "0" to the bag if no negative number is found
        }
    }
    console.log(bag.trim()); // Print the bag (trim to remove trailing spaces)
}
// Example usage
let arr = [12, -1, -7, 8, -15, 30, 16, 28]; // Array to process
let n = arr.length; // Size of the array
let k = 3; // Size of the subarray
FindNegativeNumber(arr, n, k);
