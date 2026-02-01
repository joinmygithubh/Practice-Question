# Write a program to check palindrome
  function isPalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    if (str[l] == str[r]) {
      l++;
      r--;
    } else {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
let str = "vtmtmv"
let str1 = "toohottohoot"
isPalindrome(str)
isPalindrome(str1)


# Write a program to check fibonacci series

# Write a check second largest number in a string
# Write a program 
 