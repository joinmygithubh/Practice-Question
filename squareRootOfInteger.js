function runProgram(input) {
    let lines = input.trim().split("\n");
    let T = Number(lines[0]);
    let result = [];
    
    for (let i = 1; i <= T; i++) {
        let N = Number(lines[i]);
        result.push(integerSquareRoot(N));
    }
    
    console.log(result.join("\n"));
}

function integerSquareRoot(N) {
    if (N === 0 || N === 1) return N;
    
    let left = 1, right = N, ans = 0;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (mid * mid === N) return mid;
        
        if (mid * mid < N) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return ans;
}