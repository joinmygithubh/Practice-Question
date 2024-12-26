function solve(N, arr1, arr2) {
    let stack = [];
    let poppedIndex = 0;

    for (let i = 0; i < N; i++) {
        stack.push(arr1[i]); 

        while (stack.length > 0 && stack[stack.length - 1] === arr2[poppedIndex]) {
            stack.pop();
            poppedIndex++;
        }
    }
    console.log(stack.length === 0 ? 1 : 0);
}


let N= 5
let arr1 =[1, 2, 3, 4, 5]
let arr2 =[4, 5, 3, 2, 1]
let N2 = 5
let arr3=[1, 2, 3, 4, 5]
let arr4 =[4, 3, 5, 1, 2]

solve(N,arr1,arr2)
solve(N2,arr3,arr4)