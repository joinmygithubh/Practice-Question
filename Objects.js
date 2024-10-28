let obj = {
    title :'shirt',
    price : 1000,
    color : "black",
    size : ["s", "m", "l", "xl"],
    isCotton : true
}

for(let key in obj){
    console.log(obj[key])
}