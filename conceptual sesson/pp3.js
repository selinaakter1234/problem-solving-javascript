//oddFriend

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


}
let friendsName = ["mufrid","asia","muzahidf","shadia", "ria"];
const firstOddFriend = oddFriend(friendsName);
console.log(firstOddFriend);