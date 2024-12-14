function validParenthesis(str) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // If the character is an opening bracket, push to stack
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // If the character is a closing bracket
        else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== map[char]) {
                console.log("unbalanced");
                return;
            }
        }
    }

    // If the stack is empty, the string is balanced
    if (stack.length === 0) {
        console.log("balanced");
    } else {
        console.log("unbalanced");
    }
}

let str =" (((((((((()))))))))) "

validParenthesis(str)