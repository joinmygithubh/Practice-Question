function feelGoodStrings(N, string) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let vowelCount = 0;

    // Count the number of vowels in the string
    for (let char of string) {
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    
    
    // Check if vowel count is greater than or equal to N/2
    if (vowelCount >= N / 2) {
        console.log("Feel good!");
    } else {
        console.log("Feel bad!");
    }
}
