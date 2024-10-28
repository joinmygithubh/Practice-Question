function binarySquare(N) {
  //write your code here
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if ((i + j) % 2 == 0) {
        process.stdout.write("1 ");
      } else {
        process.stdout.write("0 ");
      }
    }
    console.log();
  }
}
binarySquare(4)

