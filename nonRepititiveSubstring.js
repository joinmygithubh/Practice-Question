function nonRepetitiveSubstrings(str, k) {
    let count = 0;
    const charSet = new Set(); // To store unique characters in the current window
    let left = 0; // Left pointer of the sliding window

    for (let right = 0; right < str.length; right++) {
        // Add the current character to the set
        while (charSet.has(str[right])) {
            // Remove characters from the left until there are no duplicates
            charSet.delete(str[left]);
            left++;
        }
        charSet.add(str[right]);

        // Check if the current window size is exactly k
        if (right - left + 1 === k) {
            count++; // Increment count for valid window
            // Slide the window by removing the leftmost character
            charSet.delete(str[left]);
            left++;
        }
    }

    console.log(count);
}

let str = "idwmdggom"
let k = 2

nonRepetitiveSubstrings(str,k)