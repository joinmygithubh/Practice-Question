function removeDuplicates(n, arr){
    let a = new Set();
    for(let i=0; i<n; i++){
        a.add(arr[i]);
    }
    console.log(a)
}


let arr = [1,1,3,3]
let n = 4;

removeDuplicates(n,arr)