// a closure is the combination of a function bundled together (enclosed)
// with references to its surrounding state(the lexical environment).

// in a words, a closure gives you access to an outer functions scope from an inner function.

// a closure is an inner function that has access to the outer function variable

// closures are created when everytime a function is created.
// at a function cretion time.

// const outerFunction = (a) =>{
//     let b = 10;
//     const innerFunction = () =>{
//         let sum = a+b;
//         console.log(`the sum is ${a+b}`);
//     }
//     return innerFunction;
// }

// let checkClousure = outerFunction(5);
// console.log(checkClousure);

// run this code in browser 

// //another example of closure 
// function Outer(){
//     var a = "this is outer function ";
//     console.log(j);
//     function inner(){
//         var b = "this is internal function";
//         console.log(b);
//         console.log(a);
//     }
//     inner;

// }