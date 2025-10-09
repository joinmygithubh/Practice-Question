function invertedL(N) {
    // Write code here
    for(let i=2; i<=N; i++){
      process.stdout.write("* ")
    }
    for(let j=1; j<=N; j++){
        process.stdout.write("*")
        console.log()
    }
}

invertedL(4);