function calculateBMI(weight, height) {
    if (height <= 0) {
        return "Invalid input, height cannot be zero or negative.";
    }
    if (weight <= 0) {
        return "Invalid input, weight must be positive.";
    }
    let bmi = weight / (height * height);
    return `Your BMI is: ${bmi.toFixed(2)}`;
}
// Test cases

let weight1 = 70, height1 = 1.75;
console.log(calculateBMI(weight1, height1)); // o/p: "Your BMI is: 22.86"

let weight2 = 55, height2 = 1.60;
console.log(calculateBMI(weight2, height2)); // output: "Your BMI is: 21.48"

let weight3 = 90, height3 = 1.80;
console.log(calculateBMI(weight3, height3)); // output: "Your BMI is: 27.78"

// Edge cases
let weight4 = 70, height4 = 0;
console.log(calculateBMI(weight4, height4)); // output: "Invalid input, height cannot be zero or negative."

let weight5 = -70, height5 = 1.75;
console.log(calculateBMI(weight5, height5)); // output: "Invalid input, weight must be positive."