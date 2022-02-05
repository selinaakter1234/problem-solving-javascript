// mular dam
//first 2kg > 30tk
// morthan 2kag > 25tk
//calculate total price and handle error

function mularDam(quantity){
    if(typeof quantity != "number"){
        return "plz enter valid quantity";
    }
    if(quantity <=0){
        return "plz enter valid quantity";
    }
    if(quantity >20){
        return "plz enter less quantity";
    }
    let price=0;
    if(quantity <=2){
        price = quantity * 30;
    }
    else{
        price = quantity * 25;
    }
    return price;
}

let totalPrice = mularDam(21);
console.log(totalPrice);