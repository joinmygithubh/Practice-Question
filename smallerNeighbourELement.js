function runProgram(input) {
    let lines = input.trim().split("\n");
    let N = parseInt(lines[0]);
    let arr = lines[1].trim().split(" ").map(Number);

    let stack = [];
    let result = [];

    

    for (let i = 0; i < N; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length === 0) {
            result.push(-1);
        } else {
            result.push(arr[stack[stack.length - 1]]);
        }
        stack.push(i);
    }
    console.log(result.join(" "));
}

