//array of object

const phones = [
      
{name: 'samsung1' , price: 45000, camera: 10, storage: 32  },
{name: 'samsung2' , price: 5000, camera: 8, storage: 8   },
{name: 'samsung3' , price: 345000, camera: 10, storage: 32  },
{name: 'samsung4' , price: 445000, camera: 4, storage: 8  },
{name: 'samsung5' , price: 452000, camera: 10, storage: 32  },
{name: 'samsung6' , price: 1000, camera: 8, storage: 16  },

];

let cheapest = phones[0];
for(const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest= phone;
    }
    //console.log(phone);
}
console.log('cheapest phone is ' ,cheapest);