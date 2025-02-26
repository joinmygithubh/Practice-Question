function runProgram(input) {
    let lines = input.trim().split("\n");
    let t = parseInt(lines[0]); 
    let index = 1;
    
    for (let i = 0; i < t; i++) {
        let n = parseInt(lines[index]); 
        let arr = lines[index + 1].split(" ").map(Number); 
        console.log(sumArray(arr, n - 1));
        index += 2;
    }
}
function sumArray(arr, index) {
    if (index < 0) return 0; 
    return arr[index] + sumArray(arr, index - 1);
}