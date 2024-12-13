function solve(N, arr) {
  const freqMap = new Map();
  
  for (let i = 0; i < N; i++) {
      if (freqMap.has(arr[i])) {
          freqMap.set(arr[i], freqMap.get(arr[i]) + 1);
      } else {
          freqMap.set(arr[i], 1);
      }
  }
  
  let maxCount = 0;
  let dominatingNumber = null;
  
  for (const [num, count] of freqMap.entries()) {
      if (count > maxCount) {
          maxCount = count;
          dominatingNumber = num;
      } else if (count === maxCount) {
          dominatingNumber = null; // Tie case
      }
  }
  
  return dominatingNumber !== null ? "YES" : "NO";
}
