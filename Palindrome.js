var isPalindrome = function(x) {
    let str = x.toString();
    let res = ''
    if(x<0){
        return false
    }
    for(let i=str.length-1; i>=0; i--){
        res += str[i];
    }
    if(x==res){
        return true
    }
    else{
        return false
    }
};