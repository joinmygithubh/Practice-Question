let left =0
let right = n-1
let bottom = n-1
let top =0






while(count<=n*n){
    for(let j=left; j<=right; j++){
        console.log(arr[top][j])
    }
    top++
    for(let i=top; i<=bottom; i++){
        console.log(arr[i][right])
    }
    right--
    for(let j=right; j>=0; j--){
        console.log([bottom][j])
    }
    
}