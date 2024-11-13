function compareNumbers(number1, number2) {
    if (number1 > number2) {
        return `${number1} is larger than ${number2}`;
    } else if (number1 < number2) {
        return `${number2} is larger than ${number1}`;
    } else {
        return "Both numbers are equal";
    }
}

// Test cases
let number1 = 5, number2 = 10;
console.log(compareNumbers(number1, number2));  //output: "10 is larger than 5"

number1 = 7, number2 = 7;
console.log(compareNumbers(number1, number2));  //   output: "Both numbers are equal"

number1 = -1, number2 = -10;
console.log(compareNumbers(number1, number2));  //     output: "-1 is larger than -10"

//  Edge cases
number1 = 0, number2 = 0;
console.log(compareNumbers(number1, number2)); //   output: "Both numbers are equal"

number1 = -5, number2 = -3;
console.log(compareNumbers(number1, number2)); // output: "-3 is larger than -5"