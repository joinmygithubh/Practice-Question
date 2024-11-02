function calculate(principal, rate, time) {
    
    if (principal < 0 || rate < 0 || time < 0) {
        return "Invalid input, all values must be non-negative.";
    }

    let interest = (principal * rate * time) / 100;
    return `The simple interest is: ${interest.toFixed(1)}`;
}

// Test cases
let principal1 = 1000, rate1 = 5, time1 = 3;
console.log(calculate(principal1, rate1, time1)); //output: "The simple interest is: 150.0"

let principal2 = 1500, rate2 = 7, time2 = 5;
console.log(calculate(principal2, rate2, time2)); // output: "The simple interest is: 525.0"

let principal3 = 0, rate3 = 6, time3 = 2;
console.log(calculate(principal3, rate3, time3)); //output: "The simple interest is: 0.0"

// Edge cases
let principal4 = -1000, rate4 = 5, time4 = 2;
console.log(calculate(principal4, rate4, time4)); //output: "Invalid input, all values must be non-negative."

let principal5 = 1000, rate5 = 5, time5 = -3;
console.log(calculate(principal5, rate5, time5)); //   output: "Invalid input, all values must be non-negative."