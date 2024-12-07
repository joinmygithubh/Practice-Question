function squareSorting(n, arr){
    for(let i=0; i<n; i++){
      let flag =0;
      for(let j=0; j<n-i-1; j++){
        let sq = arr[j] * arr[j];
        let sq2 = arr[j+1] * arr[j+1]
        if(sq> sq2){
          temp = arr[j];
          arr[j] = arr[j+1]
          arr[j+1] = temp;
          flag =1;
        }
      }
      if (flag==0){
        break;
      }
    }
    console.log(arr.join(" "))
  }
  
  function runProgram(input) {
    input = input.trim().split("\n")
    let n = +input[1]
    let arr = input[2].trim().split(" ").map(Number)
    squareSorting(n, arr)
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  