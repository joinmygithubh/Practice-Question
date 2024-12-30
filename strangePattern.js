function strangePattern(N,M){
    //write your code here
    let pattern1 = "+";
    let pattern2 = "+";
  
    for (let i = 0; i < M; i++) {
      pattern1 += "/\\";
      pattern2 += "\\/";
    }
    pattern1 += "+";
    pattern2 += "+";
  
    for (let i = 0; i < N; i++) {
      console.log(pattern1);
      console.log(pattern2);
    }
  }
strangePattern(3,4)
    
  