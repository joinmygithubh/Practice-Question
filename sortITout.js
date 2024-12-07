function sortItOut(n,arr){
    let narr =[]
    for(let i =0; i<n; i++){
      narr.push(i);
    }
    for(let i=0; i<n-1; i++){
      for(let j=0; j<n-i-1; j++){
        if(arr[j]> arr[j+1]){
          let temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          
          let ntemp = narr[j];
          narr[j] = narr[j+1];
          narr[j+1] = ntemp;
        }
      }
    }
    console.log(narr.join(" "))
  }
let n=  5
let arr =[4, 5, 3, 7, 1]

sortItOut(n,arr)