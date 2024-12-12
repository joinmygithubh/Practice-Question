function validParenthesis(str) {
    let stack = []; 

    for (let i = 0; i < str.length; i++) {
        let ch = str[i]; 
        if (ch === '(' ) {
            stack.push(ch);
        } else {
            if (stack.length === 0) {
                console.log("unbalanced");
                return;
            }
            let temp = stack.pop();
            if (ch === ')' && temp !== '(' ) {
                console.log("unbalanced");
                return;
            }
        }
    }
    if (stack.length === 0) {
        console.log("balanced");
    } else {
        console.log("unbalanced");
    }
}

let str =" (((((((((()))))))))) "

validParenthesis(str)
