function add(num1,num2){
    const sum = num1 + num2;
    return sum;
}
const firstTotal = add(63,67);
console.log(firstTotal); //130

const secondTotal = add(63,7);
console.log(secondTotal); //70

const thirdTotal = add(63+67);
console.log(thirdTotal); // NAN 
