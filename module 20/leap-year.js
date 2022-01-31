function isLeapYear(year){
    if((year % 4 ==0) && (year % 100 != 0) || (year % 400 ==0) ){
        return true;
    }
    else{
        return false;
    }
}
const myYear = 2024;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year ? ' , isMyYearLeapYear);