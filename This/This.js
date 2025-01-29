console.log("This");
 /*
 rules to see the value of this :
 
 1. if the function is called with the new keyword, then this will be a brand new object. 

 2. if the function called with the call,apply,bind then this will passed as an object. 

 3. if the function is called on object, then this will be an object .. 
 ex - obj.fun();

 4. if function is called directly, then this will be window or undefined based on use of strict. 

 special rule for arrow function - 
 in arrow there is no this. 
 in arrow function this is called lexically ( in parent ),
 lexically start from current scope and if the value is not found it will search in parent scope. 
 and if the value is now present then it will give undefined error. 

 */
// practice examples 
// 1)

// function greet(){
//     console.log("Hello, "+this.name);
// }
 
// var person ={
//     name:"atish",
//     greet
// }
// var anotherPerson = {
//     name:"Sumit",
//     greet
// }
// person.greet();
// anotherPerson.greet();
// ---------
// function CarName(){
//     console.log("the car name is "+ this.carName);
// }
// const audi = {
//     carName:"r8",
//     CarName
// }
// const mahindra = {
//     carName:"Thar",
//     CarName
// }

// audi.CarName();
// mahindra.CarName();

// ---------------

// 2)
// const person1 = {
//     name:"atish"
// }
// function wrap(){
//     const show = () => {
//         console.log(this);
//     }
//     show();
// }
// wrap.call(person1);
// -------------
// 3) below code will run on browser only. not on Quakka.
// the length will set to the window object and then this will be a window object. 

// var length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length : 5,
//     method(callback){
//         callback();
//     }
// };
// object.method(callback,1,4);
// -----------
// 4) 
// var length = 4;
// function callback(){
//     console.log(this.length, this);
// }
// const object = {
//     length : 5,
//     method(){
//         //arguments is an array ( means objects ) so rule no 3 will apply here.
//         arguments[0]();
//     }
// };
// object.method(callback,1,4);
// -------------
// 5) 
// const person = {
//     lang:"JS",
//     showLang:function(){
//         console.log(this.lang);
//     }
// }
// person.showLang;
// person.showLang();
// // rule 3 - window object 
// setTimeout(person.showLang, 1000);
// -------------------
// 6)
// const person = {
//     name:"Atish",
//     sayHello:function(){
//         console.log(`Hello, ${this.name}`);
//     }
// }
// const greet = person.sayHello;
// greet();
// the function called directly hence rule no 4. window object target and result will undefined/
// --------------
// 7) 
// var  person ={
//     name:"atish",
//     sayHai:function(){
//         console.log("Hello - "+this.name);
//         setTimeout(() => {
//             console.log("Timeout "+this.name);
//         }, 1000);
//     }
// }
// person.sayHai();
// ---------------
// 8) 
// let user = {
//     name:"Atish",
//     age:20,
//     getDtl(){
//         const nestedArr = () => console.log(this.name);
//         nestedArr();
//     }
// }
// user.getDtl();
// -------------
// 9) 
// const personOne = {name:"Atish"};
// const personTwo = {name:"Sumit"};
// function show(){
//     console.log(this.name);
// };
// in below code we have saved the this object to function given below. 

// const funOne = show.bind(personOne);
// const funTwo = show.bind(personTwo);
// funOne();
// funTwo();
// -------------


