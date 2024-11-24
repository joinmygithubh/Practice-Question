function rotateBy90(R, matrix){
    //write code here
   let result = [];

    // Initialize the result matrix
    for (let i = 0; i < R; i++) {
        result.push([]);
    }

    // Fill the result matrix
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < R; j++) {
            result[R - j - 1][i] = matrix[i][j];
        }
    }
    // Print the rotated matrix
    for (let i = 0; i < R; i++) {
        console.log(result[i].join(" "));
    }
}
let matrix = [
[1, 2, 3, 4],
[5 ,6, 7, 8],
[1 ,2, 3, 4],
[5 ,6 ,7, 8]
]
rotateBy90(4, matrix)
