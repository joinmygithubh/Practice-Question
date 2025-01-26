function squareSorting(n, arr){
    for(let i=0; i<n ; i++){
        let temp=0;
        for(let j=0; j<n ;j++){
            if(arr[j]*arr[j] > arr[j+1]*arr[j+1]){
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                temp++
            }
        }
        if(temp==0){
            break;
        }
    }
    console.log(arr)
}

let n = 5
let arr = [-2, 3 ,1, -4, 6]
squareSorting(n, arr)

