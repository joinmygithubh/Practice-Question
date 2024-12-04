function solve(N,arr){
    let temp =0;
    for(let i=0; i<N; i++){
      let flag =0;
      for(let j=0; j<N-i-1; j++){
        if(arr[j]>arr[j+1]){
          temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1]= temp;
          flag =1;
        }
      }
     if(flag ==0){
      break;
    }
    }
    console.log(arr.join(" "))
  }
  
let arr  = [2,3,4,2,7,5,9,8];
solve(8, arr)