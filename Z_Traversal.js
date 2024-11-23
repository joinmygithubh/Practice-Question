function zTraversal(N, arr) {
    // Write code here
    let temp = "";
    for (let j = 0; j < N; j++) {
        temp += arr[0][j] + " ";
    }
    for (let i = 1; i < N - 1; i++) {
        temp += arr[i][N - i - 1] + " ";
    }
    for (let j = 0; j < N; j++) {
        temp += arr[N - 1][j] + " ";
    }
    console.log(temp);
}
let arr = [[1,2,3],[4,5,6],[7,8,9]]

zTraversal(3, arr)