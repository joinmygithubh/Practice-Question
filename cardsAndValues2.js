let arr=[5,0,9,7,20]
let N=5;

function cards(arr,N){
    for(let i=0; i<N-1; i++){
        for(let j=i+1; j<N; j++){
            if(arr[i]*2 == arr[j] || arr[j]*2== arr[i] ){
                console.log("Yes")
                return;

            }
        }
    }
    console.log("No")
}


cards (arr,N)