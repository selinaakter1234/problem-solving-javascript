/* const myNumber = 15;
const output = Math.abs(myNumber);
console.log(output);  */


// ceil > oporer integer nibe

/*  
const myNumber = 21.00132;
const output = Math.ceil(myNumber); 
console.log(output); 
*/


// floor > nicher integer nibe, vongnaksho bad dibe
/* const myNumber = 21.00132;
const output = Math.floor(myNumber);
console.log(output); */


//round means nearest purno songkha 0.5 thakle opore,0.5 hole niche
/* const myNumber = 21.132;
const output = Math.round(myNumber);
console.log(output); */

//random> aktarpor akta auto random number dite thakbe(0-10 er moddhe)
/* const myNumber = 21.132;
const output = Math.random(myNumber);
console.log(output); */


// random ke gun korle> joto diye gun korbo toto ar niche random songkha print hobe

// const output = Math.random() * 3;
// const rounded = Math.floor(output);
// console.log(rounded); 


 
// for loop e  kora jay
// for ( let i=0; i<=10; i++){
//     const output = Math.random() * 5;
// const rounded = Math.floor(output);
// console.log(rounded);
// }

for ( let i=0; i<=20; i++){
    const output = Math.random() * 6;
const rounded = Math.round(output);
console.log(i, '>' ,rounded);
}