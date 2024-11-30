function vowelsPriority(str){
    //write code here
    let vowel = "aeiouAEIOU";
    let consonantP= "";
    let vowelP = ""
    
    
    for(let char of str){
      if(vowel.includes(char)){
        vowelP+=char
      }
      else{
        consonantP += char;
      }
    }
    console.log(vowelP+consonantP)
}

let str = "masaischool"
let str1 = "ubcdefghioel"
let str2 = "rhythm"

vowelsPriority(str)
vowelsPriority(str1)
vowelsPriority(str2)