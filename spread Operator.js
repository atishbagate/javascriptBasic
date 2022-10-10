//spread operator 
// const colors = ['red','green','blue'];

// iss array ko add kerna pade data toh hum iss method ka use kar sakate hain 
// const myColor = [...colors,'yellow']; //[... array name,'data to add','data to add'];
// console.log(myColor);

//ES7 t.e, features added in 2016
// 1: array include //means eake array ke andar data present hain ya nahi 
// pata karana raha toh include method use karani easy hain 
// const colors = ['red','green','blue'];
// const isPresent = colors.includes('blue');
// console.log(isPresent);

// // 2) exponetiation operator ==> **  means powerOf

// console.log(2**3);

// ES7 t.e => 2017

// 1) padding feature 
//means add padding in fornt and back of data 
// let name = "atish".padEnd(6);
// let name = "atish".padSrart(8); 
// console.log(name);
// //output will be padding from front and back of data.

// 2)Obect.values-> to get data (entries) form given object.
// const person = {name:'atish',age:32};
// // console.log(Object.values(person)); //this will show the entries of on object
// console.log(Object.entries(person)); //to get an all entires inside an Object. it convert Object into array.

// // in 2018 spread operator is applicable in Object also
// // for ex:->
// const person1 = {name:'atish'};
// const person2 = {...person1,age:23}; //same ...object_name is used to add properties to object.
// console.log(person1);
// console.log(person2); 

//fromEntries -> this is ES-2019 feature 
// have property to give back Object value as an output
// const person = {name:'atish',age:23};
// const arrObj = Object.entries(person);
// console.log(Object.fromEntries(person));
// console.log(arrObj);

// tream start and trim end => used to delete space from front and back of entries.

// ES 2019 -> 
// Array.prototype.{flat,flatMap}
// Object.fromEntries() 

// now ES2020-->
// 1) bigint => koi bhi number jyada value ka hoga toh bigint use karate hain.
let oldNum = Number.MAX_SAFE_INTEGER;
console.log(oldNum);
const newNum = 9007199254740991n + 12n;
console.log(typeof newNum);

