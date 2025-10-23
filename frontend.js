const number  = [1,2,3]

const sum = number.reduce((acc , current) =>{
    return acc + current
},0)


console.log(sum)