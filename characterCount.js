function characterCount(S){
    let result =""
    let count =1;
    for(let i=0; i<S.length; i++){
        if(S[i]===S[i+1]){
            count++
        }
        else{
            result = result + S[i]+ count
            count =1;
        }
    }
    console.log(result)
}
characterCount("aaabbaaa")