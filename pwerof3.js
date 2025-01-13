function isPowerOfThree(number) {
    // If number is less than or equal to 0, it's not a power of 3
    if (number <= 0) return false;

    // Keep dividing the number by 3 until it reaches 1
    while (number % 3 === 0) {
        number = number / 3;
    }

    // If number is 1, it's a power of 3
    return number === 1;
}

// Test the function
console.log(isPowerOfThree(9));   // true (3 x 3 = 9)
console.log(isPowerOfThree(10));  // false (10 is not a power of 3)
