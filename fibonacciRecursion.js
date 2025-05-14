function fibonacci(n) {
    if (n === 0) return 0;  
    if (n === 1) return 1;  
    return fibonacci(n - 1) + fibonacci(n - 2);  
}


function runProgram(input) {
    let n = parseInt(input.trim());
    console.log(fibonacci(n));
    console.log(fibonacci)
}