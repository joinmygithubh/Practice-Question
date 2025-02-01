function solveTheFinancialBT(n,arr){
    let count =0;
    for(let i=0; i<n; i++){
        let flag = false;
        for(let j=i-1; i>=0; i--){
            if(arr[i]>=arr[j]){
                count++
                flag = true
                break

            }
        }
       
    }
    console.log(count)

}


let arr =[100,60,70,65,80,85]
solveTheFinancialBT(6,arr)