//Brute Force Approach

let arr1 = [1,3,5,7,9]
let arr2 = [2,4,6,8,10]
let res =[];

for(let i=0; i<arr1.length; i++){
    res.push(arr1[i])
}
for(let i=0; i<arr2.length;i++){
    res.push(arr2[i])
}
console.log(res.sort((a,b)=>a-b)); // T.C = O(nlogn)

//Time Complexity = O(nlogn);
//Space Complexiy = O(n+m)