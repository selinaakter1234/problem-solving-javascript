// 1 foot = 12 inch

//function

function inchToFeet(inches){
    var feet = inches/12;
    return feet; 
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log('my inches in feet',feet); 


var sumiInches = 16;
var feet = inchToFeet(sumiInches);
console.log('sumi inches in feet',feet); 


var rumiInches = 500;
var feet = inchToFeet(rumiInches);
console.log('rumi inches in feet',feet);
