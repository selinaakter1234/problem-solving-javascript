/* function largestElement(numbers){
    let largest = 0;
    for(let i=0; i< numbers.length; i++){
        //console.log(i);
        const element = numbers[i];
        // console.log(element);
        if(element > largest){
            largest = element;
        }
        

    }
    return largest;
}
const ages = [1,2,3,4,5,7,7,85,5];
const oldest = largestElement(ages);
*/

function largestElement(numbers){
    let largest = numbers[0];
    for(let i=0; i< numbers.length; i++){
        //console.log(i);
        const element = numbers[i];
        // console.log(element);
        if(element > largest){
            largest = element;
        }
        

    }
    return largest;
}
const ages = [1,2,3,4,5,7,7,85,5];
const oldest = largestElement(ages);
const oldest2 = largestElement([-10,-2,-17]);
console.log('oldest' ,oldest);
console.log('oldest' ,oldest2);



// Task: find the lowest elemet of an array
/*

function lowestElement(numbers){
    let lowest = numbers[0];
    for(let i=0; i< numbers.length; i++){
        //console.log(i);
        const element = numbers[i];
        // console.log(element);
        if(element < lowest){
            lowest = element;
        }
        

    }
    return lowest;
}
const ages = [1,2,3,4,5,7,7,85,5];
const oldest = lowestElement(ages);
const oldest2 = lowestElement([-10,-2,-17]);
console.log('oldest' ,oldest);
console.log('oldest' ,oldest2);


*/