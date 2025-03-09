function runProgram(input) {
    // Read input and parse values
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);

    arr.sort((a, b) => a - b);

    console.log(binarySearch(arr, k));
}

function binarySearch(arr, k) {
    let s = 0, e = arr.length - 1;

    while (s <= e) {
        let mid = Math.floor(s + (e - s) / 2);

        if (arr[mid] === k) return 1;
        else if (arr[mid] < k) s = mid + 1; 
        else e = mid - 1; 
    }

    return -1; 
}
