function arrayToString(n,arr){
    //write code here
    let res = "";
    for(let i =0; i<n ; i++){
      if(arr[i]<0){
        res+="0"
      }
      else{
        res+= arr[i].toString();
      }
    }
    console.log(res)
}

 
let arr =["2", "4", "6", "8", "9"]
arrayToString(5,arr)