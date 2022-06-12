// // destrucuring in Array  means creating chunks of an array in small parts.
// const bioData = ['atish','bagate',23];

// let[first,second,age,education = 'CS engg'] = bioData;    //this is syntax for destrucuring of an array

// console.log(`my name is ${first} and sir name is ${second} and Age is ${age} and my qualification is ${education}`); 

// // object destructuring in JS 
// const myInfo = {
//     myName1: 'atish',
//     myAge1 : 23,
// }

// let {myName1,myAge1,edu='12th'} = myInfo; //this syntax for obj destructuring 
// console.log(`my name is ${myName1} and my age is ${myAge1} and my education is ${edu}`);

// //how to add Dynamic value inside an Object key.
// let name = 'atish';

// const myInfo = {
//     [name]: "haii" ,//[] is used to define and fetch the dynamic data inside the object 
//     [23+5]: 'my age' //we can perform Math operation inside [] bracket.
// }
// console.log(myInfo);

//no need to write key and value name if they have same name 
let name = 'atish';
const myInfo ={
    name  //yaha name : name aisa likhane ki zarrorat nahi hain.
}
console.log(myInfo);