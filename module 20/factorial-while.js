// node function-while.js
function getFactorial(number){

    let factorial = 1;
    let i=1;
    while( i<=number){
     
        factorial = factorial*i;
        i++;

    }
    return factorial;

}
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is :' , firstFactorial);

var secoundFactorial = getFactorial(5);
console.log('factorial of 5 is :' , secoundFactorial);

// decreament korle 
function getFactorial(number){

    let factorial = 1;
    let i=number;
    while( i>=1){
     
        factorial = factorial*i;
        i--;

    }
    return factorial;

}
var firstFactorial = getFactorial(7);
console.log('factorial of 7 is :' , firstFactorial);

var secoundFactorial = getFactorial(5);
console.log('factorial of 5 is :' , secoundFactorial);