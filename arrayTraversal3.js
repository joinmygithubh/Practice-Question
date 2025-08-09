let matrix = [[1, 8, 9],
[2, 7, 10],
[3, 6, 11],
[4, 5, 12]]


function traverse2dArray(N, M, matrix){
    //write code here
    const rows = matrix.length;
    const cols = matrix[0].length;
    let result = [];

    for (let col = 0; col < cols; col++) {
        // Traverse each column from bottom to top
        for (let row = rows - 1; row >= 0; row--) {
            result.push(matrix[row][col]);
        }
    }

    
    console.log(result.join(" "));  
}



traverse2dArray(4,3,matrix)