function missingElement( arr){
    let n = arr.length+1;
    let expectedSum = (n*(n+1)) / 2
    let actualSum = 0;

    for(let i=0; i<arr.length; i++){
        actualSum += arr[i];
    }
    let res = expectedSum - actualSum;
    console.log(res)
}


let arr = [1,2,3,5];
missingElement(arr)


