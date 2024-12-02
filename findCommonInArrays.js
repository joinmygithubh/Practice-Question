function findCommonElements(A, B, n) {
    let i = 0; // Pointer for array A
    let j = n - 1; // Pointer for array B (since it's sorted in descending order)
    let count = 0;

    // Traverse both arrays to find common elements
    while (i < n && j >= 0) {
        if (A[i] === B[j]) {
            count++;
            i++;
            j--;
        } else if (A[i] > B[j]) {
            j--; // Move in descending array
        } else {
            i++; // Move in ascending array
        }
    }

    console.log(count);
}

let A = [1,2,2,3,4,5]
let B = [4,4,3,2,1,1]
let n =6

findCommonElements(A,B,n)
