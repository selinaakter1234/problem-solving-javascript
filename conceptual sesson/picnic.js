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