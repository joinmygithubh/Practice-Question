function classicalValidParenthesis(str) {
    let stack = []; 

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (ch === '(' || ch === '[' || ch === '{') {
            stack.push(ch);
        } else {
            let temp = stack.pop();
            if (stack.isEmpty) {
                console.log("not balanced");
                return;
            }
            if ((ch === ']' && temp !== '[') ||
                (ch === '}' && temp !== '{') ||
                (ch === ')' && temp !== '(')) {
                console.log("not balanced");
                return;
            }
        }
    }
    if(stack.length==0){
      console.log("balanced")
    }
    else{
      console.log("not balanced")
    }
}

let str = "{([])}"
let str1 = "()"
let str2 ="([]"


classicalValidParenthesis(str)
classicalValidParenthesis(str1)
classicalValidParenthesis(str2)
