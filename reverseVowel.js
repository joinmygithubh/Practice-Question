function reverseVowels(str) {
    const vowels = 'aeiouAEIOU'; // Define the set of vowels
    let left = 0;
    let right = str.length - 1;
    let strArr = str.split(''); // Convert string to array for easier manipulation

    while (left < right) {
        // Move left pointer until a vowel is found
        while (left < right && !vowels.includes(strArr[left])) {
            left++;
        }
        // Move right pointer until a vowel is found
        while (left < right && !vowels.includes(strArr[right])) {
            right--;
        }
        // Swap the vowels at left and right pointers
        if (left < right) {
            [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
            left++;
            right--;
        }
    }

    console.log(strArr.join('')); // Convert array back to string
}

let str='abc'
let str1= 'abe'
reverseVowels(str)
reverseVowels(str1);