function isPalindrome(str) {
    let i=0; 
    let j= str.length-1;
    while(i<j){
      if(str[i]!=str[j]){
        console.log("No")
      }
      i++;
      j--;
    }
    console.log("Yes")
}
isPalindrome("Nitin")