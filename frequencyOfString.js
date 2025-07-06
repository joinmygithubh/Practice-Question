//Frequency of string means how many time each character appears in String

let name = 'Sammeer'

let ob = {}

for(let i=0; i<name.length; i++){
    let char = name[i];

    if(ob[char]){
    ob[char]++
}


else{

    ob[char] =1
}
}
console.log(ob)