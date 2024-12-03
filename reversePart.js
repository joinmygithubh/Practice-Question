function solve(N, S, L, R) {
    let result = "";
    for (let i = 0; i < N; i++) {
        if (i >= L && i <= R) {
            result += S[R - (i - L)];
        } else {
            result += S[i];
        }
    }
    console.log(result);
}


let N=8
let S ='fxavixem'
let L= 0
let R =1

solve(N,S,L,R);