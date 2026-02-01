let arr = [1,2,3,4,6,7,8,10]

function consecutiveGroup(arr){
    let result = [];

    let curr = [arr[0]]

    for(let i=1; i<arr.length; i++){
        if(arr[i] === arr[i-1]+1){
            result.push(arr[i])
        }
        else{
            result.push(curr)
            curr = [arr[i]]
        }
    }
    result.push(curr)
    return result;
}

console.log(consecutiveGroup(arr))