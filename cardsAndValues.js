let arr = [1,2,3,4]
let N = 4

for(let i=0; i<N-1;i++){
    for(let j=i+1; j<N; j++){
        if(arr[i]*2 == arr[j] || arr[j]*2== arr[i]){
            console.log("Yes")
            return;
        }
    }
    console.log("No")
}