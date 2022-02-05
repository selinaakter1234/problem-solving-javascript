
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

console.log(pandaCost(1,2,"kj"));