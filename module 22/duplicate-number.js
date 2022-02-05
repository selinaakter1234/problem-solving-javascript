const names =[1,2,5,85,2,5,5,6,8,25,6,12,8,25,5,7,6,63,87,4,2,0,0,54,8,8,1,1];


function removeDuplicate(names){
    const unique = [];
    for(const element of names){
        //console.log(element);
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    } 
    return unique;
}

//function declear/call

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); 