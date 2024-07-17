console.log("This is the topic for Hoisting and TDZ temp dead zone.");
/*
https://www.freecodecamp.org/news/javascript-temporal-dead-zone-and-hoisting-explained/

Hoisting - make some type of variables accessible/usable in the code before 
they are actually declared. 
variables lifted to the top of their scope. 
Hoisting refers to JavaScript giving higher precedence to the declaration of variables, classes, and functions during a program’s execution.
Hoisting makes the computer process declarations before any other code.
Note: Hoisting does not mean JavaScript rearranges or moves code above one another.
Hoisting simply gives higher specificity to JavaScript declarations. Thus, it makes the computer read and process declarations first before analyzing any other code in a program.
in details - 
    code is scanned for variable declarations, and for each variable,
    new property is created in the variable environment object. 
there are different behavior of hoisting for 
functions, var, let and const, function expression and arrows.
What is TDZ -> temp dead zone. 

*/

// console.log(one); // same as let - reference error.
// console.log(two); // var is declared but not initialized.
// console.log(three); // same as let - reference error.

// let one = "1";
// var two = "2";
// const three = "3";
// ----------------
// console.log(addDecl(2,3)); // function is hoisted. bcoz function is declared. 
// console.log(addExpr(2,3)); // not declated.
// console.log(addArrow(2,3));  not declared.

// function addDecl(a,b){
//     return a+b;
// }
// const addExpr = function(a,b){
//     return a+b;
// }
// const addArrow = (a,b) => a+b;

