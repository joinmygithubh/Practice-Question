function selectionSort(n, arr){
    for(let i=0; i<n; i++){
        minIndex = i

        for(let j=i+1; j<n ;j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j
            }
        }
        temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }
    console.log(arr.join(" "))
}




let n = 5
let arr = [3, 5, 0, 9, 8]

selectionSort(n, arr)