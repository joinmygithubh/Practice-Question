let str = "o n e";

function revereseAStringWithoutSpaces(str){  
    let nstr = "";
    for(let i=str.length-1;i>=0; i--){
        if(str[i]!==" "){
            nstr+= str[i];
        }
        // if(str[i]!==" "){
        //     continue;
        // }
        // nstr+=str[i];
    }
    return nstr;
}
console.log(revereseAStringWithoutSpaces(str))