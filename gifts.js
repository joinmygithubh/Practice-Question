//Two pointer Type 2 both pointer moving in same direction

function longestUniqueSubarray(gifts, n) {
    let i = 0; // Initialize left pointer
    let j = 0; // Initialize right pointer
    let max = 0; // Initialize max length
    let obj = {}; // Dictionary to track occurrences of elements

    while (j < n) { // Loop until the right pointer reaches the end of the array
        if (!(gifts[j] in obj) || obj[gifts[j]] === 0) { 
            // If the current gift is not in the dictionary or its count is 0
            obj[gifts[j]] = 1; // Add it to the dictionary
            max = Math.max(max, j - i + 1); // Update max with the length of the current subarray
            j++; // Move the right pointer forward
        } else {
            // If the current gift is already in the dictionary
            obj[gifts[i]]--; // Decrement the count of the left pointer element
            i++; // Move the left pointer forward
        }
    }
    console.log(max); 
}

let n=8
let gifts =[1, 2, 1, 3, 2, 7, 4, 2]
let n2= 5
let gifts2 =[1, 2, 1, 3, 4]
let n3=4
let gifts3 =[1, 2, 2, 1]

longestUniqueSubarray(gifts,n)
longestUniqueSubarray(gifts2, n2)
longestUniqueSubarray(gifts3,n3)