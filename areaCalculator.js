function calculateTriangleArea(base, height) {
    if (base < 0 || height < 0) {
        return "Invalid number, base and height must be positive numbers.";
    }
    let area = (base * height) / 2;
    return `The area of the triangle is: ${area.toFixed(1)}`;
}

// Test cases
let base1 = 10, height1 = 5;
console.log(calculateTriangleArea(base1, height1)); //  o/p: "The area of the triangle is: 25.0"

let base2 = 0, height2 = 15;
console.log(calculateTriangleArea(base2, height2)); // o/p: "The area of the triangle is: 0.0"

let base3 = 8, height3 = 0;
console.log(calculateTriangleArea(base3, height3)); // output: "The area of the triangle is: 0.0"


// Edge cases
let base4 = -5, height4 = 10;
console.log(calculateTriangleArea(base4, height4)); // output: "Invalid number, base and height must be positive numbers."

let base5 = 7, height5 = -4;
console.log(calculateTriangleArea(base5, height5)); // output: "Invalid number, base and height must be positive numbers."