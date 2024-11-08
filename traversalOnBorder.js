let arr = [ [1,2,3,4],
            [5,6, 7, 8],
            [9,10,11,12],
            [13,14,15,16]]

for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
        if(i==0 || j==0 || j==arr.length-1 || i==arr.length-1){
            console.log(arr[i][j]);
        }
    }
}