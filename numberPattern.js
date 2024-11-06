function numberPattern(N){
    //write your code here
    for(let i=1; i<=N; i++){
      let temp=" ";
      for(let j=1; j<=i; j++){
        process.stdout.write(j.toString())
      }
      console.log();
    }
    for(let i=N-1; i>=1; i--){
      let temp=" ";
      for(let j=1; j<=i; j++){
        process.stdout.write(j.toString())
      }
      console.log();
    }
  }
numberPattern(5)  