function runProgram(input) {
    let [X, N] = input.trim().split(" ").map(Number);
    console.log(countWays(X, N, 1));
}


function countWays(X, N, num) {
    let power = Math.pow(num, N);
    if (X === 0) return 1;
    if (X < 0 || power > X) return 0;
    return countWays(X - power, N, num + 1) + countWays(X, N, num + 1);
}