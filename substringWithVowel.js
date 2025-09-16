function stringVowels(N,str){
      let count =0;
      for(let i=0; i<N; i++){
        let temp=""
        for(let j=i; j<N; j++){
          temp+= str[i];
          if(isStartingWithVowel(temp)){
            count++;
          }
        }
      }

      
      console.log(count);
    }
    function isStartingWithVowel(str){
      if(str[0]=='a' || str[0]=='e' || str[0]=='i' || str[0]=='o' || str[0]=='u'){
        return true;
      }
      else{
        return false;
      }
    }
stringVowels(3, 'abc')     