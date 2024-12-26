function solve(N, arr) {
    let left = 0, right = N - 1;
    let leftMax = 0, rightMax = 0;
    let waterTrapped = 0;

    while (left <= right) {
        if (arr[left] < arr[right]) {
            if (arr[left] >= leftMax) {
                leftMax = arr[left];
            } else {
                waterTrapped += leftMax - arr[left];
            }
            left++;
        } else {
            if (arr[right] >= rightMax) {
                rightMax = arr[right];
            } else {
                waterTrapped += rightMax - arr[right];
            }
            right--;
        }
    }

    console.log(waterTrapped);
}



let N = 5
let arr =[3, 2, 0, 4, 6]
let N1 =7
let arr1= [7, 0, 3, 6, 2 ,3, 5]

solve(N,arr)
solve(N1, arr1)