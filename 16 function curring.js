// function curring is a technique of evaluating function with multiple arguments,
// into sequence of function with single argument.
// in other word ,whena function,instead of taking al arguments at one time,
// takes the firstt one and return a new function that takes the second one and returns a new function which takes third one,and so fourth untill all arguments have been fulfilled.
// sum (2)(3)(4) //this is function sum in which (2)(3)(4) are different function having parameters. init .
// function sum(num1) {
//     return function(num2){
//         return function(num3){
//             console.log(num1+num2+num3);
//         }
//     }
// }
// shor form of above code is  
const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

sum(3)(5)(6);