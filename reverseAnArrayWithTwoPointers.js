function reverseAnArray(arr) {
  let l = 0;
  let r = arr.length - 1;
  let temp =0

  function swap(arr,l,r){
    temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
  }
  while (l < r) {
    swap(arr, l, r);
    l++;
    r--;
  }
  console.log(arr)
}
let arr = [2, 3, 4, 5, 1, 5, 7];
reverseAnArray(arr)

//Time Complexity = O(n);
//Space COmplexiy = O(1);