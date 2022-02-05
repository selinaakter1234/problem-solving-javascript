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
let friendsName = ["mufrid","asi1","muzahidf","shadia", "ria"];
const firstOddFriend = oddFriend(friendsName);
console.log(firstOddFriend);