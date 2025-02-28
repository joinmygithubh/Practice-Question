function binary(n) {
    if (n === 0) return "";  // Base case
    return binary(Math.floor(n / 2)) + (n % 2).toString();
}

function runProgram(input) {
    let lines = input.trim().split("\n");
    let t = parseInt(lines[0]);  // Number of test cases
    
    for (let i = 1; i <= t; i++) {
        let n = parseInt(lines[i]);
        console.log(n === 0 ? "0" : binary(n)); // Handle case when n=0
    }
}
