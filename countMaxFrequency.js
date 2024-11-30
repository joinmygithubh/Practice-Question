function maxFrequency(N,arr){
    //Write Code here
      let c0 =0, c1=0, c2=0
      for(let i=0; i<N; i++){
        if(arr[i]==0){
          c0++;
        }
        else if(arr[i]==1){
          c1++;
        }
        else if(arr[i]==2){
          c2++;
        }
      }
      if(c0 >= c1 && c0 >= c2){
        console.log("0-"+ c0)
      }
      else if (c1>=c0 && c1>= c2){
        console.log("1-"+ c1)
      }
      else{
        console.log("2-"+c2)
      }
    }
    

let N =7
let arr = [1, 1, 1, 0, 2, 0, 1]

maxFrequency(N,arr)