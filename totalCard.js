function cartTotal(N, price, quantity) {
    let total = 0;
    for (let i = 0; i < N; i++) {
        total += price[i] * quantity[i];
    }
    console.log(total);
}

let N = 3;

let price = [100,20,40]
let quantity = [2,1,2]


cartTotal(N, price,quantity)
