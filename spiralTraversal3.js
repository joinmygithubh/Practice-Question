function spiralTraversalV(N, matrix) {
    let left = 0;
    let right = N - 1;
    let top = 0;
    let bottom = N - 1;
    let count = 0;
    let temp = "";
  
    while (count < N * N) {
      for (let i = top; i <= bottom && count < N * N; i++) {
        temp += matrix[i][right] + " ";
        count++;
      }
      right--;
  
      for (let j = right; j >= left && count < N * N; j--) {
        temp += matrix[bottom][j] + " ";
        count++;
      }
      bottom--;
  
      
      for (let i = bottom; i >= top && count < N * N; i--) {
        temp += matrix[i][left] + " ";
        count++;
      }
      left++;
  
      for (let j = left; j <= right && count < N * N; j++) {
        temp += matrix[top][j] + " ";
        count++;
      }
      top++;
    }
    console.log(temp);
  }

let matrix = [[1,2,3], [4,5,6], [7,8,9]] 

spiralTraversalV(3, matrix)
