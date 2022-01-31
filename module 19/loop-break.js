// node loop-break.js
// for loop break
var numbers = [10,20,50,50,60,70,10];
for (var i=0; i<numbers.length; i++ ){
    var number = numbers[i];
    //console.log(number);
    if(number>50){
        break;
    }
}
//for loop continue
for (var i=0; i<numbers.length; i++ ){
    var number = numbers[i];
    
    if(number>50){
        continue;
    }
    //console.log(number);
}
// while loop  break
var i=0;
while(i<10){
    //console.log(i);
    if(i==5){
        break;
    }
    i++;

}
// while continue
var i= 0;
while(i<10){
    
    if(i==4){
        continue;
        
    }
    console.log(i);
    i++;
}
