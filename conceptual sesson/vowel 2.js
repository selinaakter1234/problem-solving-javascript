//using array
//count the number of vowel in a string

function countVowel(sentence){
    let count =0;
    let vowels= ["a","e","i","o","u"];
    //for(let i=0; i<sentence.length; i++){
        for(const letter of vowels){
        //let letter = sentence[i].toLowerCase();
        if(vowels.indexOf(letter) > -1){
            count = count+1;
        }
        
    }
    return count;
}

let string = "quick brown fox jums over the lazy dog oo.";

console.log(countVowel(string));