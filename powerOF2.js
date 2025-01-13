function isPowerOfTwo(number) {
    // If number is less than or equal to 0, it's not a power of 2
    if (number <= 0) return false;

    // Keep dividing the number by 2 until it reaches 1
    while (number % 2 === 0) {
        number = number / 2;
    }

    // If number is 1, it's a power of 2
    return number === 1;
}

// Test the function
console.log(isPowerOfTwo(8));  // true (because 8 = 2 x 2 x 2)
console.log(isPowerOfTwo(10)); // false (because 10 is not a power of 2)