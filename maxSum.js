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
  