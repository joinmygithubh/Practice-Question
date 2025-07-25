// const users = [
//   { name: "Alice", age: 25, email: "alice@example.com" },
//   { name: "Bob",   age: 17, email: "bob@example.com"   },
//   { name: "Carol", age: 30, email: "carol@example.com" },
//   { name: "Dave",  age: 22, email: "dave@example.com"  },
//   { name: "Eve",   age: 19, email: "eve@example.com"   }
// ];


// function getDetails(){
//     let under21 = [];
//     let inBetween = [];
//     let above = [];


//     for(let i=0; i<users.length; i++){
//         if(users.age<21){
//             under21.push(users[i])
//         }
//     }
// }
// let output = {
//   under21: [{ name: "Bob",   age: 17, email: "bob@example.com"   },{ name: "Eve",   age: 19, email: "eve@example.com"   }],
//   inBetween: [{ name: "Alice", age: 25, email: "alice@example.com" },{ name: "Dave",  age: 22, email: "dave@example.com"  }],
//   above25: [{ name: "Carol", age: 30, email: "carol@example.com" }]
// }

// let arr = [1,2,4,5,6,7]

// let result = arr.map((ele)=>{
//     console.log(ele+ele)
// })

// let arr = [1,2,3,4,5,6,6,7,8,9]

// let result = arr.filter((ele) =>{
//     return (ele%3==0)
// })

// console.log(result)


// let arr = [12,4,5,6,7,8,8]

// let result = arr.reduce((acc, curr) =>{
//     return acc = acc + curr
// },"")

// console.log(result)


let filteredData = "electronics"

let narr = arr.filter((ele)=>{
    return ele.category == filteredData
})


.map((ele) =>{
    ele.price = ele.price -19   
    return ele
})
.reduce((acc, curr)=>{
    acc += curr.price
    return acc 
},0)

console.log(narr)
