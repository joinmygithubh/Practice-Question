function evenSumColumns(N, M, arr) {
    // Iterate over columns
    for (let j = 0; j < M; j++) {
        let sum = 0; 
        for (let i = 0; i < N; i++) {
            if (arr[i][j] % 2 === 0) {
                sum += arr[i][j]; 
            }
        }
        console.log(sum);
    }   
    
}
let arr = [[1,2,3,], [4,5,6],[7,8,9]]

evenSumColumns(3,3, arr)
