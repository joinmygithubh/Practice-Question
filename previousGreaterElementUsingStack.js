function previousGreaterElementUsingStack(n, arr) {
  let res = [];
  let stk = [];
  for (let i = 0; i < n; i++) {
    while (stk.length > 0 && stk[stk.length - 1] < arr[i]) {
      stk.pop()
    }
    if (stk.length > 0) {
        res.push(stk[stk.length - 1]);
    } else {
      res.push(-1);
    }
    stk.push(arr[i]);
  }
  console.log(res)
}



let arr = [10, 4, 2, 20, 40];
previousGreaterElementUsingStack(5, arr);
