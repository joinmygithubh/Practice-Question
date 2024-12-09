function FindNegativeNumber(arr, n, k) {
  let bag = "";

  for (let i = 0; i <= n - k; i++) {
      let count = 0;
      let j = i;
      let flag = true;

      while (count < k) {
          if (arr[j] < 0) {
              bag += arr[j] + " ";
              flag = false;
              break;
          }
          count++;
          j++;
      }

      if (flag) {
          bag += "0 ";
      }
  }

  console.log(bag);
}
