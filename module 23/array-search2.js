//array-search.js
const products = [
    {name: 'iphone 14', price: '700000'},
    {name: 'samsung galaxy', price: '5000000'},
    {name: 'lenevo laptop', price: '6000'},
    {name: 'del laptop watch', price: '5600000'},
    {name: 'asus laptop watch', price: '30000000'},
    {name: 'apple laptop watch', price: '71000000'}
];


function searchProducts(products , searchText){
    const result = [];
    for(const product of products){
        
        if(product.name.includes(searchText)){
            result.push(product);
            
        }
        
    }
    return result;
}

const matched = searchProducts(products, 'laptop');
console.log(matched);