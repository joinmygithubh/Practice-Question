function runProgram(input) {
    console.log(findLength(input, 0));
}
function findLength(str, index) {
    if (str[index] === undefined) return index; 
    return findLength(str, index + 1); 
}