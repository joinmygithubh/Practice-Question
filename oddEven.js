let arr = [ 2, 3, 4, 5,6,7,8];

function oddEven(arr, condition) {
  let narr = [];
  if (condition == "even") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 0) {
        narr.push(arr[i]);
      }
    }
  } else if (condition == "odd") {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 == 1) {
        narr.push(arr[i]);
      }
    }
  }
  return narr;
}

console.log(oddEven(arr, "odd"));
