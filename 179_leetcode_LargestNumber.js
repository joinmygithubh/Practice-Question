var largestNumber = function(nums) {
    // Convert numbers to strings
    nums = nums.map(String);

    // Sort using custom comparator
    nums.sort((a, b) => (b + a) - (a + b));

    // Join into a single string
    let result = nums.join('');

    // Edge case: if all zeros
    if (result[0] === '0') return '0';

    
    return result;
};
