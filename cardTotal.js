function cartTotal(N, price, quantity) {
    let total =0;
    for(let i=0; i<N; i++){
      total += price[i]*quantity[i];
    }
    console.log(total)
  }
  
  let price =[100,20,40]
  let quantity =[2,1,2]

  cartTotal(3, price, quantity)