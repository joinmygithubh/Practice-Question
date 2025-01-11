function minSum(n,k,arr){
    let sum =0
    for(let i=0; i<k;i++){
      sum += arr[i]
    }
    temp = sum
    for(let i=k; i<n;i++){
      sum = sum + arr[i] - arr[i-k]
      if(sum<temp){
        temp=sum
      }
    }
    console.log(temp)
  }
  function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1
    for(let i=0; i<tc; i++){
      let temp = input[line].trim().split(" ").map(Number)
      let n = temp[0];
      let k = temp[1];
      line++
      let arr = input[line].trim().split(" ").map(Number);
      line++
      minSum(n,k,arr)
    }
  
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
  