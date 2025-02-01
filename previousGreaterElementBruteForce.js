function previousGreaterElementBruteForce(n, arr){
    let res = [-1]

    for(let i=1; i<n; i++){
        let flag = false
        for(let j=i-1; j>=0; j--){
            if(arr[j]>arr[i]){
                res.push(arr[j])
                flag = true
                break;
            }
        }
        if(!flag){
            res.push(-1)
        }
    }
    console.log(res)
}

let arr= [10,4,2,20,40]
previousGreaterElementBruteForce(5, arr)