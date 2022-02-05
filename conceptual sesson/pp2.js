//problem-01
function anaToVori (ana){
    if(typeof ana != "number"){
        return "plz enter valid ana number";
    }
    if( ana <= 0){
        return "plz enter valid ana number";
    }


    var vori = ana/16;
    return vori;
}

var vori = anaToVori(32);
console.log(vori);






//problem-02
function pandaCost(singara, somucha, jilapi) {

    if(typeof singara != "number"){
        return "plz enter valid number";
    }
    if(typeof somucha != "number"){
        return "plz enter valid number";
    }
    if(typeof jilapi != "number"){
        return "plz enter valid number";
    }
    if( singara <= 0){
        return "plz enter valid number";
    }
    if( somucha <= 0){
        return "plz enter valid number";
    }
    if( jilapi <= 0){
        return "plz enter valid number";
    }



       let totalPrice;
       if( singara > 0 && somucha > 0 && jilapi > 0 ){
        let singaraPrice = singara *7;
        let somuchaPrice = somucha * 10;
        let jilapiPrice = jilapi *15;
        totalPrice = singaraPrice + somuchaPrice + jilapiPrice;
        
    }
    return totalPrice;
        
}

console.log(pandaCost(1,2,1));



// problem-03
function picnicBudget(people){
    if(typeof people != "number"){
        return "plz enter valid people number";
    }
    if( people <=0){
        return "plz enter valid people number";
    }

    let budget;
    if(people >200){
        let first100Budget = 100 *5000;
        let second100Budget = 100 * 4000;
        let remainingBudget = (people -200) * 3000;
        budget = first100Budget + second100Budget + remainingBudget;
    }
    else if(people >100){
        let first100Budget = 100 *5000;
        let remainingBudget = (people-100) * 4000;
        budget = first100Budget + remainingBudget;
    }
    else if(people<= 100) {
        budget = people*5000;
    }
   

return budget;
    
}
const totalBudget =picnicBudget(1);
console.log(totalBudget);





// problem-4

function oddFriend(){
  
    for(let i=0; i< friendsName.length; i++){
        const element= friendsName[i];
        let elementLength =friendsName[i].length;

         if(typeof friendsName[i] != "string"){
             return " please enter a string name";
         }

        if(elementLength %2 == 1){
            return friendsName[i];
        }
           
    }
    return " there is no odd friend in this array";


}
let friendsName = ["mufrid","asia","muzahid","shadia", "ria"];
const firstOddFriend = oddFriend(friendsName);
console.log(firstOddFriend);