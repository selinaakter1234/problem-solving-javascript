
/* chairWood = 3cft/chair
tableWood = 10cft/table
bedWood =  50cft/bed 
*/

function woodCalculator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood =3;
    const perTableWood =10;
    const perBedWood =50;
    //wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWood;


}

const firstoption = woodCalculator(1,3,1);
console.log(firstoption);