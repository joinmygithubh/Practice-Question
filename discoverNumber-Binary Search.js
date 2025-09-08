function runProgram(input) {
    let lines = input.trim().split("\n");
    let [N, Q] = lines[0].split(" ").map(Number);
    let A = new Set(lines[1].split(" ").map(Number));
    let result = [];

    for (let i = 2; i < 2 + Q; i++) {
        result.push(A.has(Number(lines[i])) ? "YES" : "NO");
    }
    console.log(result.join("\n"));
}
