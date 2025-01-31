function runProgram(input) {
    const lines = input.trim().split("\n");
    const n = parseInt(lines[0]); // Number of operations
    const stack = [];
    let output = [];
    
    for (let i = 1; i <= n; i++) {
        const command = lines[i].split(" ");
        
        if (command[0] === "1") {
            // Push operation
            const value = parseInt(command[1]);
            stack.push(value);
        } else if (command[0] === "2") {
            // Pop operation
            if (stack.length > 0) {
                stack.pop();
            }
        } else if (command[0] === "3") {
            // Print top element
            if (stack.length === 0) {
                output.push("Empty!");
            } else {
                output.push(stack[stack.length - 1]);
            }
        }
    }
    
    console.log(output.join("\n"));
}