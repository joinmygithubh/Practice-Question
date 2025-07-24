// // // // // // function counter(){
// // // // // //     let count = 0;

// // // // // //     function counterClosure(){
// // // // // //         count++
// // // // // //         return count
// // // // // //     }

// // // // // //     return counterClosure
// // // // // // }

// // // // // // let count1 = counter()

// // // // // // console.log(count1)
// // // // // // console.log(count1)
// // // // // // console.log(count1)


// // // // // function counter() {
// // // // //   let count = 0;
// // // // //   return function () {
// // // // //     count++;
// // // // //     console.log(count);
// // // // //   };
// // // // // }
// // // // // const increment = counter();
// // // // // increment();
// // // // // increment();
// // // // // increment();





// // // // function multiplier(factor) {
// // // //   return function (number) {
// // // //     return number * factor;
// // // //   };
// // // // }
// // // // const double = multiplier(2);
// // // // console.log(double(5));


// // // function greet(name) {
// // //   return function () {
// // //     console.log("Hello, " + name);
// // //   };
// // // }
// // // const greetJohn = greet("John");
// // // greetJohn();



// // function createSequence() {
// //   let num = 1;
// //   return function () {
// //     console.log(num);
// //     num += 2;
// //   };
// // }
// // const getNext = createSequence();
// // getNext();
// // getNext();
// // getNext();



// function bankAccount(initialBalance) {
//   let balance = initialBalance;
//   return {
//     deposit: function (amount) {
//       balance += amount;
//       console.log("Balance:", balance);
//     },
//     withdraw: function (amount) {
//       balance -= amount;
//       console.log("Balance:", balance);
//     },
//   };
// }
// const myAccount = bankAccount(100);
// myAccount.deposit(50);
// myAccount.withdraw(30);



function greeting(name) {
  return function (greet) {
    console.log(greet + ", " + name);
  };
}
const sayHello = greeting("Alice");
sayHello("Hello");
