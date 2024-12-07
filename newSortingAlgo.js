function newSortingAlgorithm(n, k, arr) {
  for (let i = 0; i < n - 1; i++) {
    let flag = 0;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] % k > arr[j + 1] % k) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        flag = 1;
      }
    }
    if (flag == 0) {
      break;
    }
  }
  console.log(arr.join(" "));
}
let n = 5;
let k= 6;
let arr = [12, 18, 17, 65, 46]

newSortingAlgorithm(n,k,arr)