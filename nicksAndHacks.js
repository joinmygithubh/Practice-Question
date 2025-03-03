function canReach(n, target) {
    if (n === target) return true;
    if (n > target) return false;
    return canReach(n * 10, target) || canReach(n * 20, target);
}
function runProgram(input) {
    let lines = input.trim().split("\n");
    let T = parseInt(lines[0]);
    let results = [];
    for (let i = 1; i <= T; i++) {
        let N = parseInt(lines[i]);
        results.push(canReach(1, N) ? "Yes" : "No");
    }



    console.log(results.join("\n"));
}
