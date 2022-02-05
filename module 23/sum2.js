//recursion using sum of numbers functions
function sum(i){
    console.log(i);
    if(i==1){
        return 1;
    }
    return i + sum(--i);

}
let totalsum = sum(5);
console.log("sum:" ,totalsum);