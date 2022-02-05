const myarray =[1,2,3,4,5,85];
myarray.length = 6 // koita element ache
myarray[0]=1
myarray[1]=2
myarray[5]=85 // array te index no dile element er nam dekha jay
 
myarray.push(33) >7
myarray.length = 7 

//
const myString ='Hello how are you';
myString.length = 17 // space soho count korbe 

myString[1]=e
myString[5]= ' '
myString[6]=h
myString[10]=a

//string imutable> mane change hobe na
// array  er kono index er element change kora jay push kore

//
for (const element of myarray){
    console.log(element);
}
// out put:[1,2,3,4,5,85]
// sob element dekhabe


//string er khetre
for (const char of myString){
    console.log(char);  // charecter ke lock korte chaile
} 
// output:
/* H
e
l
l
o

 h
 o
 w 

 a
 r
 e
 
  y
  o
  u */