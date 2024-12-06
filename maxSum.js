function maxSum(n,k,arr){
    let sum =0
    for(let i=0; i<k; i++){
      sum += arr[i];
    }
    
    let temp = sum;
    for(let i=k; i<n; i++){
      sum = sum + arr[i]-arr[i-k]
      if(sum>temp){
        temp =sum
      }
      
    }
    console.log(temp)
  }
  
let k =3

let arr =[-1, -1, -2, 1, -2, 4, 1, 9, 3, 9]

maxSum(k,arr)