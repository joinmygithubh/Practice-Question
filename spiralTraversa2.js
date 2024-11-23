function spiralTraversal(N, M, arr){
    //write code here
  let top =0;
  let bottom = N-1;
  let left =0;
  let right = M-1
  let temp = ""
  let count =0
  while(count < N*M){
    
  for(let i=bottom; i>=top && count<N*M ; i--){
    temp += arr[i][left] + " "
    count++
  }
  left++
  for(let j=left; j<=right && count<N*M ; j++){
    temp += arr[top][j] + " "
    count++
  }
  top++
  for(let i=top; i<=bottom && count<N*M ; i++){
    temp += arr[i][right] + " "
    count++
  }
  right--
  for(let j=right; j>=left && count<N*M ; j--){
    temp += arr[bottom][j] + " "
    count++
  }
  bottom--
  
  }
  console.log(temp)
}

let N=4;
let M=3;
let arr =[
[4, 5, 6],
[3, 12, 7],
[2,11, 8],
[1, 10, 9]
]

spiralTraversal(N,M, arr)