// <!-- object literal is simply a key:value data structure 
// storing variables and functions together in one container 
// we can refer this as an objects.

// object = school bags
// -->
// //  1ST METHOD TO CRATE OBJECT 
// let bioData ={
//     myName : "atish",
//     age : 23,

//     getData: function () {
//         console.log(`my name is ${bioData.myName} and my age is ${bioData.age}`);
//     }
// }
// //to call the function
// bioData.getData();

// //2nd method to creat an OBJECT ==> no need to write the function() name 
// let bioData1 = {
//     myName : "atish",
//     age : 24,

//     getData(){
//         console.log(`my name is ${bioData1.myName} and my age is ${bioData1.age}`);
//     }
// }
// //to call the function
// bioData1.getData();

// // 3rd method ==> object inside object in JS 
// let bioData2 ={
//     myName2 :{
//         realname:"tillu",
//         home:'latur'
//     },
//     myName : "atish",
//     age : 24,

//     getData(){
//         console.log(`my real name is ${bioData2.myName2.realname} and I lives in ${bioData2.myName2.home}`);
//         console.log(`my name is ${bioData1.myName} and my age is ${bioData1.age}`);
//     }
// }
// //to call the function
// bioData2.getData();

// what is this object ?
// the defination of this object is that it contain the current context.
// this object can have different values depending on where it is placed. 

// for ex 1 . 
// console.log(this.alert('hai'); //run this in browser.
// this refers to the current Object and that is the window global object 

// ex 2 :
// function myName() {
//     console.log(this);
// }
// myName(); //this function has its current contect = window Object.

// ex3 :
// var myNames = "atish";
// function myName() {
//     console.log(this.myNames);
// }
// myName();

// // ex4 :
// const obj = {
//     myAge : 23,
//     myName(){
//         console.log(this);
//         console.log("my age is ="+this.myAge);
//     }
// }
// obj.myName();

// note : -  this is not work on fat arrow function. 

// ex 6 :-
let bioData = {
    myname:{
        realname : 'tillu',
        address : 'latur'
    },
    myAge : 23,
    getData(){
        console.log(`my name is ${this.myname.realname} and my age is ${this.myAge}`);
    }
}