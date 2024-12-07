function maxSumOfSubarray(n,arr,k){
    let res = -Infinity;
    
    for(let i=0; i<n-k+1; i++){
      let sum =0;
      for(let j=i; j<=i+(k-1); j++){
         sum = sum +arr[j]
      }
      if(sum>res){
        res = sum
      }
     
    }
     console.log(res)
  }
  

let n=10;
let k=3;

let arr = [-1, -1, -2, 1, -2, 4, 1, 9, 3, 9]

maxSumOfSubarray(n,arr,k)