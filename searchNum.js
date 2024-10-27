let arr = [1,2,2,3,5,5,7,7,7,9,10]

function searchEngine(arr, searchText){
    let count =0;
    let nstr =[];
    for(let i=0; i<arr.length ; i++){
        if(searchText ==arr[i]){
            count ++;
            nstr.push(arr[i]);
        }
    }
    return `Count:${count}  nstr:${nstr}`;
}

console.log(searchEngine(arr, 7))