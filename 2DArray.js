let arr = [[3, 5, 6], [9, 2, 6], [3, 5, 2]]
let ans = 0


for(let i=0 ; i<=2; i++){
  if(arr[0][i] %3==0)
  ans +=1;
}

let column =1

for(let i=1; i<=2; i++){
  if(arr[i][column]%3==0){
    ans += i
  }
  column--
}
for(let i=1; i<=2; i++){
  if(arr[2][i]%3==0){
    ans +=i
  }
}





console.log(ans)

