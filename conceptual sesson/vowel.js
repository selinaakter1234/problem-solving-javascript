//count the number of vowel in a string

function countVowel(sentence){
    let count =0;
    for(let i=0; i<string.length; i++){
        
        let letter = sentence[i].toLowerCase();
        if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
            count = count+1;
        }
        
    }
    return count;
}

let string = "quick brown fox jums over the lazy dog .AAa One";

console.log(countVowel(string));