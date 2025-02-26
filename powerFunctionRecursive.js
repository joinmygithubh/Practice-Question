function runProgram(input) {
    let [a, b] = input.split(" ").map(Number);
    console.log(power(a, b));
}

function power(a, b) {
    if (b === 0) return 1; 
    let halfPower = power(a, Math.floor(b / 2));
    let result = halfPower * halfPower;
    if (b % 2 !== 0) result *= a; 
    return result;
}