// mile to kilometer
// 1mile = 1.60934km
function mileToKm(miles){
    var km = miles* 1.60934;
    return km;

}
var marathon = mileToKm(26.2);
console.log('marathon mile in km: ', marathon);