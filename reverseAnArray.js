//Brute Force Approach

let arr = [2,3,4,5,1,5,7];

let res = []

for(let i=arr.length-1; i>=0; i--){
    res.push(arr[i]);
}
console.log(res)

//Time Complexity = O(n);
//Space Complexity = O(n);