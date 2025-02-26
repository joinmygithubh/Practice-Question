function runProgram(input) {
    let data = input.trim().split("\n");
    let N = parseInt(data[0]);
    let arr = data[1].split(" ").map(Number);

    recursiveBubbleSort(arr, N);
    console.log(arr.join(" "));
}

function recursiveBubbleSort(arr, n) {
    if (n == 1) return;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; 
        }
    }
    recursiveBubbleSort(arr, n - 1);
}