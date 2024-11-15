function runLengthEncoding(S){
    let res =""
    for(let i=0; i<S.length; i++){
        let count=1
        while(S[i]==S[i+1] && i<S.length-1){
            count++
            i++
        }
        res = res+ S[i];
        res = res +count
    }
    console.log(res)
}
runLengthEncoding("aaabbbbccccaaa");