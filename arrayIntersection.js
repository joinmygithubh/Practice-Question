let N =3;
let arr1 = [4,5,7]
let arr2 = [9,2,5]

function intersectionOfArray(N, arr1, arr2){
    //write code here
    for(let i=0; i<N; i++){
      for(let j=0; j<N; j++){
        if(arr1[i]==arr2[j]){
          console.log(arr1[i]);
          return;
        }
      }
    }
}
intersectionOfArray(3, arr1,arr2)