let str = "abcdefghij";


function mapChar(str){
    for(let i=1; i<=str.length-1; i++){
        console.log(i , str[i])
    }
}
console.log(mapChar(str));