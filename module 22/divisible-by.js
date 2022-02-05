for (let i=1; i<=50; i++){
    if(i%3 ==0 && i%5 == 0){
        console.log('devided by 3 & 5');
    }
    else if(i%3 == 0){
        console.log('devided by 3')
    }
    else if(i%5 == 0){
        console.log('devided by 5')
    }
    else{
        console.log(i);

    }
}