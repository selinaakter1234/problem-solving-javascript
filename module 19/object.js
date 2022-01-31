// object 
var microphone = {
    brand: 'blue yeti',
    price: 120,
    color: 'black'
}
var computer = {
    brand: 'blue yeti',
    price: 120,
    color: 'black',
    processor: 'intel i5'
}
console.log(computer);
// {
console.log(computer.processor);
//  or
var computerPrice = computer.price;
console.log(computerPrice); // }

// set obeject property value
computer.price = 2000000;
computer["price"] = 1800;
computer.brand = 'love';
console.log(computer);

//
var mahiya = {mahi: "hate"};

mahiya.mahi='love'
console.log(mahiya);