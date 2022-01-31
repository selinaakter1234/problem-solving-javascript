const numbers =[44,5,4,1,0,7,8,58,65,88,5,5,20];
let sum =0;
for (let i=0; i< numbers.length; i++){
    //console.log(i);
   const element= numbers[i];
//    console.log(element);
   sum = sum + element;
   
}
console.log(sum);


//..................... use function
function arrayTotal(numbers){

    let sum =0;
    for (let i=0; i< numbers.length; i++){
    const element= numbers[i];
    sum = sum + element;
    
   
}
return sum;
}
const total = arrayTotal([30,45,50]);
console.log(total);

