function mostWaterContain(n, arr) {
  let left = 0;
  let right = n - 1;
  let maxArea = 0;
  while (left < right) {
    let width = right - left;
    let height = Math.min(arr[left], arr[right]);
    let area = width * height;
    maxArea = Math.max(maxArea, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
