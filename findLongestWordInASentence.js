let sentence = "I love Masai Assignments"

let longest = ""
let words = sentence.split(" ")

for(let i=0; i< words.length; i++){
    if(words[i].length > longest.length){
        longest = words[i];
    }
}

console.log(longest)

