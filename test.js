function digitSum(num) {
  return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

function digiSumSort(n, arr) {
  // Use bubble sort to avoid using the built-in sort function
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          const sumA = digitSum(arr[j]);
          const sumB = digitSum(arr[j + 1]);

          if (sumA > sumB || (sumA === sumB && arr[j] > arr[j + 1])) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  console.log(arr.join(" "))
}
