function stringParentheses(str) {
    const stack = [];
    const map = {
        ')': '(',
        ']': '[',
        '}': '{',
    };

    for (let char of str) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char); // Push opening brackets onto the stack
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                console.log("unbalanced");
                return;
            }
        }
    }
    // If the stack is empty, the string is balanced
    console.log(stack.length === 0 ? "balanced" : "unbalanced");
}

let str ="(((((((((())))))))))"

stringParentheses(str)