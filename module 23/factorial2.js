function factorial(i){

    if(i==1){
        return 1;
    }
    return i * factorial(--i); // (--i = i-1)

}
console.log(factorial(4));