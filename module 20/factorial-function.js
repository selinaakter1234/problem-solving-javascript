//node factorial-function.js

// let factorial=1;
// for(let i=1; i<=5; i++){
//     factorial = factorial*i;
// }
// console.log(factorial);
function factorial(number){

    let fact = 1;
    for(let i=1; i<=number; i++){
     
        fact = fact*i;

    }
    return fact;

}
var firstFactorial = factorial(7);
console.log('factorial of 7 is :' , firstFactorial);

var secoundFactorial = factorial(5);
console.log('factorial of 5 is :' , secoundFactorial);


// decrement
function factorial(number){

    let fact = 1;
    for(let i=number; i>=1; i--){
     
        fact = fact*i;

    }
    return fact;

}
var firstFactorial = factorial(7);
console.log('factorial of 7 is :' , firstFactorial);

var secoundFactorial = factorial(5);
console.log('factorial of 5 is :' , secoundFactorial);