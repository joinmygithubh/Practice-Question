var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    let str = x.toString();
    let res = ''

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