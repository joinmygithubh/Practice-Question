function runProgram(input) {
    let lines = input.trim().split("\n");
    let [N, K] = lines[0].split(" ").map(Number);
    let arr = lines[1].split(" ").map(Number);
    console.log(upperBound(arr, K));
}

function upperBound(arr, K) {
    let left = 0, right = arr.length, ans = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] > K) {
            ans = mid;
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}