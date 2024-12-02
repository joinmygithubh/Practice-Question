function mergeSortedArray(A, B, n) {
  let i = 0; // Pointer for ar1
  let j = 0; // Pointer for ar2
  let k = 0; // Pointer for ar3
  let C = new Array(n); // Resultant array
  // Merge arrays until one of them is fully traversed
  while (i < n && j < n) {
    if (A[i] < B[j]) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = B[j];
      j++;
    }
    k++;
  }
  // Add remaining elements of ar1 (if any)
  while (i < n) {
    C[k] = A[i];
    i++;
    k++;
  }

  // Add remaining elements of ar2 (if any)
  while (j < n) {
    C[k] = B[j];
    j++;
    k++;
  }

  console.log(C); // Return the merged array
}

const A = [1, 3, 5]; 
const B = [2, 4, 6]; 
let n =3

mergeSortedArray(A,B,n)