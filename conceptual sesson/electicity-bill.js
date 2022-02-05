// node electicity-bill.js
// 1st 100 unite -5tk
//for  more than 100 unite 6tk
// more  than 200 > 7 tk

function electicityBill(unit){
   
let bill;
if(unit >200){
    let first100Bill = 100*5;
    let second100Bill = 100*6;
    let remainingBill = (unit-200)*7;
    bill = first100Bill + second100Bill + remainingBill;
}

else if(unit > 100){
    let firstBill = 100*5;
    let remainingBill = (unit -100)*6;
    bill = firstBill + remainingBill;

}
else if(unit <= 100){
    bill =  unit *5;
}

return bill;
}

const totalBill = electicityBill(201);
console.log(totalBill);


