const products = [
      
    {name: 'laptop' , price: 45000, quantity:1},
    {name: 'pen' ,    price: 55000, quantity:1},
    {name: 'shirt' , price: 65000 , quantity:1},
    {name: 'skart' , price: 75000 , quantity:1},
    {name: 'abaya' , price: 15000 , quantity:1}
   
];

let totalPrice = 0;
for(const product of products){
totalPrice = totalPrice + product.price;
}
console.log(totalPrice);
  

//cart
const cart = [
      
    {name: 'laptop' , price: 45000, quantity:1},
    {name: 'pen' ,    price: 55000, quantity:2},
    {name: 'shirt' , price: 65000 , quantity:1},
    {name: 'skart' , price: 75000 , quantity:1},
    {name: 'abaya' , price: 15000 , quantity:1}
   
];

let cartTotal = 0;
for(const product of cart){
console.log(product);
const productTotal = product.price * product.quantity;
cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);