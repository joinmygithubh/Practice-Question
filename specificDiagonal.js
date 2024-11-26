function specificDiagonals(R, C, matrix, K){
    let left =0; right=0;
    
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(matrix[i][j]==K){
          left = j-i
          right =i+j
        }
      }
    }
    let leftBag =""; let rightBag =""
    for(let i=0; i<R; i++){
      for(let j=0; j<C; j++){
        if(j-i==left){
          leftBag += matrix[i][j]+" "
        }
        if(i+j==right){
          rightBag += matrix[i][j] + " "
        }
      }
    }
    console.log(leftBag)
    console.log(rightBag)
}
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
specificDiagonals(3,3,matrix,6)
