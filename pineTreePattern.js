function pineTreePattern(n) {
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= n - i; j++) {
        process.stdout.write(" ");
      }
      for (let k = 1; k <= 2 * i - 1; k++) {
        process.stdout.write("*");
      }
      console.log();
    }
    let pipe=" ";
    for(let p=1; p<n; p++){
      pipe+=" "
    }
    pipe+="|"
    console.log(pipe)
  }
  
  pineTreePattern(5)