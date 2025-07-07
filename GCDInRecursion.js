function gcd(a, b) {
    if (b === 0) return a; 
    return gcd(b, a % b);  
}
function runProgram(input) {
    let lines = input.trim().split("\n");
    let t = parseInt(lines[0]);  

    
    
    for (let i = 1; i <= t; i++) {
        let [a, b] = lines[i].split(" ").map(Number);
        console.log(gcd(a, b)); 
    }
}