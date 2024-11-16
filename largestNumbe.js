let arr =[12, 35, 1, 10, 34, 1]

function largestNumber(arr){
    let largest = arr[0];

    for(let i=0; i<arr.length; i++){
        if(largest < arr[i]){
            largest = arr[i];
        }
    }
    console.log(largest);
}

largestNumber(arr)