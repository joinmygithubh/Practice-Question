function showAge(){
  console.log(this.age)
}

const user = {
  age: 30,
  display : showAge
}

const boundAge = user.display.bind(({age:50}))

user.display = boundAge
user.display()