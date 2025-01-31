function runProgram(input) {
    let lines = input.trim().split("\n");
    let T = parseInt(lines[0]); // Number of test cases
    let results = [];
    let index = 1;

    for (let t = 0; t < T; t++) {
        let n = parseInt(lines[index]); // Length of string
        let str = lines[index + 1];
        index += 2;

        // Process the string to remove adjacent duplicates
        let stack = [];
        for (let char of str) {
            if (stack.length > 0 && stack[stack.length - 1] === char) {
                stack.pop(); // Remove the adjacent duplicate
            } else {
                stack.push(char);
            }
        }
        results.push(stack.join(""));
    }
    
    console.log(results.join("\n"));
}

