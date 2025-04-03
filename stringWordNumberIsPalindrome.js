const isPlaindrome = (inputChar) => {
    let str = inputChar.toString();
    let resultWord = '';
    for(let i=str.length-1; i>=0; i--)
    {
        resultWord += str[i];
    }
    return (resultWord == str) ? true : false;
}


console.log(isPlaindrome('racecar'))
console.log(isPlaindrome('abc'))
console.log(isPlaindrome(121))

console.log("Data loaded successfully ")