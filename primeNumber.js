let num = 1;
let temp =0;
for(let i=2; i<num; i++){
    if(num%i==0){
        temp++
    }
}
if(temp ==0){
    console.log("Num is prime")
}
else{
    console.log("Num is not prime")
}