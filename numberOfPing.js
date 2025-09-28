function numberOfPing(n,str){
    //write code here
    let countOfCharacters = { 'p' : 0, 'i': 0, 'n':0, 'g': 0};
    
    for(let char of str){
      if(char in countOfCharacters){
        countOfCharacters[char]++;
      }
    }
    console.log (Math.min(countOfCharacters['p'], countOfCharacters['i'], countOfCharacters['n'], countOfCharacters['g']))
  }


  
let n= 7;
let str = "pingpin"
let n1 =8;
let str1= "pingping"

numberOfPing(n,str)
numberOfPing(n1,str1)