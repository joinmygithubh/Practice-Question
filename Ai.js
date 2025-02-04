// function operation(a, b, op) {
//     return op(a, b); // Call the provided function
// }

// function add(a, b) {
//     return a + b; // Return sum
// }

// console.log(operation(5, 2, add)); // Output: 7


// map hof

// let arr =[1,2,3,4,5]
// let sq = arr.map(a => a*3)
// console.log(arr)



// //for each
// let arr =[1,2,3,4,5]

// arr.forEach(a => console.log(a*1))


//reduce 

// let arr =[1,2,3,4,5]

// let sum =arr.reduce((acc, num) => Math.max(acc, num), 0)
// console.log(sum)



// //filter
// let arr =[1,2,3,4,5]

// let even =arr.filter(x=> x%2==0)

// console.log(even.join(" "))



// OOPs

// class student {
//     constructor(name, rollno){
//         this.name = name,
//         this.rollno = rollno
//     }

//     display(){
//         console.log(this.name, this.rollno)
//     }
// }
// let student1 = new student("sameer", 12)

// student1.display()


// function student(name,rollno){
//     this.name = name,
//     this.rollno = rollno


//     this.introduce = function (){
//         console.log(`This is ${this.name} and my roll no is ${rollno}`)
//     }
// }

// let student1 = new student("Sameer" , 123)

// student1.introduce()



// let arr = [1,2,3,4,5]

// let odd = arr.filter( a => a%3==0)

// console.log(odd)


// let arr = [1,2,3,4,5]

// let a = arr.map(num => num+1)

// console.log(a)



// let arr = [1,2,3,4,5]

// arr.forEach( (a => console.log(a+2)))



let arr = [1,2,3,4,5];

let sum = arr.reduce( (acc, n) => acc+n, 0 )

console.log(sum)