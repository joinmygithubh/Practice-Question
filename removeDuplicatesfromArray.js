function removeDuplicates(arr){
    let unique = []

    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }

    console.log
}

let arr = [1,2,4,5,5,5,6,7]

console.log(removeDuplicates(arr))