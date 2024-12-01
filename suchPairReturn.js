function findPair(arr, n, k) {
  //write code here
  let sort = arr.sort((a, b) => a - b);
  let l = 0;
  let r = sort.length - 1;

  while (l < r) {
    let sum = sort[l] + sort[r];
    if (sum == k) {
      console.log("1");
      return;
    }
    if (sum > k) {
      r--;
    } else {
      l++;
    }
  }
  console.log("-1");
}
let n=5;
let k=2;
let arr =[3, 4, 0, 2, 7]

findPair(arr,n,k)