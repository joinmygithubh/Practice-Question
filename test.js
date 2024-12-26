function reduceString(str) {
    const stack = []; // Use a stack to process characters
    for (let char of str) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop(); // Remove the last character if it matches the current one
        } else {
            stack.push(char); // Otherwise, add the character to the stack
        }
    }
    // Check the final state of the stack
    if (stack.length === 0) {
        console.log("Empty String");
    } else {
        console.log(stack.join("")); // Join remaining characters to form the final string
    }
}
