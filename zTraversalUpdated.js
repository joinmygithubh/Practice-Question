function zTraversal(N,arr){
    let temp='';
  for(let i=0;i<N-1;i++){
    temp += arr[0][i]+' ';
  }
  let i=0;
  let j=N-1;
  while(i<N-1 && j>0){
    temp += arr[i][j]+' ';
    i++;
    j--;
  }
  for(let i=0;i<N;i++){
    temp += arr[N-1][i]+' ';
  }
  console.log(temp);
}


let N =3
let arr =[[1, 2, 3,],
[4, 5, 6],
[7, 8, 9]]
zTraversal(N,arr)

