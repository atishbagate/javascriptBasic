
"use strict";
console.log("Notes for Scops in JS."); 

/*
Scoping - where our variable defined. calling that variables is known as scoping. 

Lexical Scoping - Scoping is controlled by placement of functions and block in the code. 

scope - the place or the border in which variables functions decleared. 
 
3 types of scops -> functional scope, block scope, global scope.

let, var, const are  the 3 different types to declare variable
declaration is depends upon the scope.

let and const are block scope.
var is function scope.
functions are also block scope.
*/

function parent(){
    let a = 1;
    var b = 2;
    
    const  g = "v";
    if(true){
          let a = 4;
          var b = 5; 
          const  g = "r";

          console.log(a);
          console.log(b); 
          console.log(g); 
    } 
    console.log(a);
    console.log(b);  // here value is upated.
    console.log(g); 
}
parent();

