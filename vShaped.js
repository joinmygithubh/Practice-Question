function printVPattern(n){
    for (let i = 0; i < n; i++) {
        let row = '';
    
        for (let j = 0; j < i; j++) {
          row += ' ';
        }
  

        row += '\\';
    
        for (let j = 0; j < (n - i - 1) * 2 ; j++) {
          row += ' ';
        }
        if (i < n ) {
          row += '/';
        }
    
        console.log(row);
      }
    
      

  }
  // Call the function with n=4 to print the pattern
  printVPattern(4);
  