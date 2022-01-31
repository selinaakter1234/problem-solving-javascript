const business = 450;
const minister = 350;
const army =2000;
/*
if(business>minister && business > army){
    console.log('bussiness person is bigger');
}
else if(minister>business && minister > army){
    console.log('minister person is bigger');
}
else{
    console.log('army person is bigger');
}
*/

//another way
var max = Math.max(business,minister,army);
console.log('largest is ', max);

