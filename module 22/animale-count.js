function animalCount(miles){
    const animaleDensityfirst10PerMile =10;
    const animaleDensitySecound10PerMile =50;
    const animaleDensityRestPerMile =100;
    if(miles <= 10){
        const count = miles *10;
        return count;
    }
    else if(miles <=20){
        const firstDenseAnimals = 10 * animaleDensityfirst10PerMile;
        const restMiles =miles -10;
        const secoundDenseAnimals =restMiles * animaleDensitySecound10PerMile;
        const totalAnimals = firstDenseAnimals + secoundDenseAnimals ;
        return totalAnimals;

    }
    else{
        const firstDenseAnimals = 10 * animaleDensityfirst10PerMile;
        
        const secoundDenseAnimals =10 * animaleDensitySecound10PerMile;
        const restMiles =miles -20;
        const restDenseAnimales = restMiles * animaleDensityRestPerMile;

        const totalAnimals = firstDenseAnimals + secoundDenseAnimals + restDenseAnimales;
        return totalAnimals;
    }
}
const animals = animalCount(35);
console.log(animals);


let sum=0; 
for( let i = 0; i<=3;i++){
     sum = sum + i; 
    }

    console.log(sum);

