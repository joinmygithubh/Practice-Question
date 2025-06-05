const person1 ={
    fName : 'Samer',
    lNmae : "ahmed",
    fullName : function(city, state){
        return this.fName + " " + this.lNmae + " " + city + state
    }
}

const person2 = {
    fName : "Ankit",
    LNmae : "Kumar"
}
console.log(person1.fullName.call(person2, "Faridabad", "Haryana"))