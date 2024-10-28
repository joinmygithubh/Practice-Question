function patternU(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == n || j == 0 || j == n) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

patternU(4)
