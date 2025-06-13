function tripletSum(n, arr) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = arr[i] + arr[j];
            for (let k = 0; k < n; k++) {
                if (k !== i && k !== j && arr[k] === sum) {
                    console.log("1") ; // Found a valid triplet
                }
            }
        }
    }
    console.log("0") // No valid triplet found
}
