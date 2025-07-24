const users = [
  { name: "Alice", age: 25, email: "alice@example.com" },
  { name: "Bob",   age: 17, email: "bob@example.com"   },
  { name: "Carol", age: 30, email: "carol@example.com" },
  { name: "Dave",  age: 22, email: "dave@example.com"  },
  { name: "Eve",   age: 19, email: "eve@example.com"   }
];


function getDetails(){
    let under21 = [];
    let inBetween = [];
    let above = [];


    for(let i=0; i<users.length; i++){
        if(users.age<21){
            under21.push(users[i])
        }
    }
}
let output = {
  under21: [{ name: "Bob",   age: 17, email: "bob@example.com"   },{ name: "Eve",   age: 19, email: "eve@example.com"   }],
  inBetween: [{ name: "Alice", age: 25, email: "alice@example.com" },{ name: "Dave",  age: 22, email: "dave@example.com"  }],
  above25: [{ name: "Carol", age: 30, email: "carol@example.com" }]
}