function runProgram(input) {
    input = input.split("\n")
    let s = +(input[0])
    
    let arr = input[1].split(" ").map(Number)
    
    let temp = ""
    for(let i =0; i<arr.length; i++){
      temp += (arr[i]+1) +" "
    }
    console.log(temp) 
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
  