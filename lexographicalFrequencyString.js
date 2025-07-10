function lexographicalfrequencyString(s){
    let freq = {}

    for(let i=0 ;i<s.length; i++){
        let char = s[i]

        if(freq[char]){
            freq[char]++
        }
        else{
            freq[char]=1
        }
    }

    
    let sortedkey = Object.keys(freq).sort()

    for(let key of sortedkey){
        console.log(key + " " + freq[key])
    }
}

let s = 'masai'