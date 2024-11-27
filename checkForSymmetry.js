function checkForSymmetry(n, matrix) {
    let isHorizontalSymmetric = true;
    let isVerticalSymmetric = true;

    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (matrix[i] !== matrix[n - i - 1]) {
            isHorizontalSymmetric = false;
            break;
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < Math.floor(n / 2); j++) {
            if (matrix[i][j] !== matrix[i][n - j - 1]) {
                isVerticalSymmetric = false;
                break;
            }
        }
        if (!isVerticalSymmetric) break;
    }
    if (isHorizontalSymmetric && isVerticalSymmetric) {
        console.log( "BOTH");
    } else if (isHorizontalSymmetric) {
        console.log("HORIZONTAL");
    } else if (isVerticalSymmetric) {
        console.log("VERTICAL");
    } else {
        console.log("NO");
    }
}
const n = 4;
const matrix = [
    ['*', '.', '*', '.'],
    ['.', '*', '.', '*'],
    ['.', '*', '.', '*'],
    ['*', '.', '*', '.']
];


console.log(checkForSymmetry(n, matrix)); 
