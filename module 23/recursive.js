



function consoleNumber(i){
    if(i >5){
        return;
    }
    console.log(i);
    consoleNumber(i+1); // functione r vitor call kora recursive;
}
consoleNumber(1);