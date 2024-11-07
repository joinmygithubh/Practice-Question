function patternOfL(N) {
    // Write code here
    for(let i =1; i<=N-1; i++){
      console.log("*")
    }
    for(let j=1; j<=N; j++){
       process.stdout.write("* ")
    }
}



patternOfL(4)