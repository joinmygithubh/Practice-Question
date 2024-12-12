function solve(N,arr){
    let odd = [];
    for(let i=0; i<N; i++){
      if(arr[i]%2==1){
        odd.push(arr[i])
      }
    }
    let even = []
    for(let i=0; i<N; i++){
      if(arr[i]%2==0){
        even.push(arr[i])
      }
    }
    
    for(let i=0; i<odd.length; i++){
      for(let j=0; j<odd.length-i-1; j++){
        if(odd[j]> odd[j+1]){
          let temp = odd[j];
          odd[j] = odd[j+1];
          odd[j+1] = temp;
        }
      }
    }
    for(let i=0; i<even.length; i++){
      for(let j=0; j<even.length-i-1; j++){
        if(even[j]> even[j+1]){
          let temp = even[j];
          even[j] = even[j+1];
          even[j+1] = temp;
        }
      }
    }
    
     let result = odd.concat(even);
     console.log(result.join(" "))
   
  }


let arr =[2, 5, 1, 4, 2]

solve(5,arr)
