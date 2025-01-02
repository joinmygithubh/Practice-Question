function patternW(N) {
    // Write code here
    for(i=0;i<N;i++){
      let output = "";
      for(j=0;j<N*2;j++){
        if(i==j){
          output+="\\"
        }
        else{
          if(j+1==N*2-i){
            output+= '/'
          }
          else{
            output+=" "
          }
        }
      }
      for(j=0;j<N*2;j++){
        if(i==j){
          output+='\\'
        }
        else{
          if(j+1==N*2-i){
            output+='/';
            break;
          }
          else{
            output+=" "
          }
        }
      }
      console.log(output)
    }
    
}

patternW(4) 