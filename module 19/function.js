//function
function addNumbers(n1,n2,n3){
    console.log(n1,n2,n3);
    var total = n1+n2+n3;
    return total;
}
// addNumbers(1,2,5);
 var a=2;
var b=3;
var c=5;
var result = addNumbers(a,b,c);
console.log('result ' , result);



//problem-2
function bringApple(taka){
    console.log('apple er taka' , taka);
    var applePrice =10;
    var quantity = taka / applePrice;
    return quantity;
}
var money = 250;
var apple = bringApple(money);
console.log( 'apple songkha' ,apple);

//
function getReminder(number1, number2) {
    number1 % number2;
  }
  
  const reminder = getReminder(12, 2);
  
  console.log(reminder);
  //

  function addNumber(number1, number2) {
    return "Result is " + number1 + number2;
   }
   
   var result = addNumber(5, 4);
   console.log(result);