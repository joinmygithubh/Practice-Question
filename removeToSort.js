function removeToSort(n,arr){
    let min = -Infinity;
    let res = ""
    for(let i=0; i<n; i++){
        if(arr[i]>=min){
            min = arr[i];
            res += arr[i] +" "
        }
    }
    console.log(res );
}


let n=10;
let arr = [1, 2, 4 ,3, 5, 7, 8, 6, 9, 10]

removeToSort(n,arr)