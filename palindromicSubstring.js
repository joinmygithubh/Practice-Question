/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        let temp = "";
        for (let j = i; j < s.length; j++) {
            temp += s[j];
            if (isPalindrome(temp)) {
                ans++;
            }
        }
    }
    return ans;
};


var isPalindrome = function (s) {
    let start = 0;
    let end = s.length - 1;

    while (start < end) {
        if (s[start++] !== s[end--]) {
            return false;
        }
    }
    return true;
};
// Example 1:
// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".

// Example 2:
// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".