function calculateFinalPrice(price) {
    if (price < 0) {
        return "Invalid price, the price must be a non-negative number.";
    }
    let finalPrice = price > 20 ? price * 0.9 : price;
    return `The final price of the item is: ${finalPrice.toFixed(2)}`;
}

// Test cases
let price1 = 25;
console.log(calculateFinalPrice(price1)); //  output: "The final price of the item is: 22.50"

let price2 = 20;
console.log(calculateFinalPrice(price2)); //output: "The final price of the item is: 20.00"

let price3 = 15;
console.log(calculateFinalPrice(price3)); // output: "The final price of the item is: 15.00"

// Edge cases
let price4 = -5;
console.log(calculateFinalPrice(price4)); // output: "Invalid price, the price must be a non-negative number."

let price5 = 0;
console.log(calculateFinalPrice(price5)); //output: "The final price of the item is: 0.00"