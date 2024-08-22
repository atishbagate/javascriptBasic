// this is the notes for Closure in js 

// defination -> A closure is a function having access to the parent scope,
//  even after the parent function has closed.

// defination 2 = 
// A closure is the combination of a function bundled together (enclosed) with 
// references to its surrounding state (the lexical environment). In other words, 
// a closure gives you access to an outer function’s scope from an inner function. 
// In JavaScript, closures are created every time a function is created, at function creation time.

let x = 1;  // Global variable 

const ParentFunction = () => {
    let y = 2; //local variable 
    console.log("Local Value inside function - y ", y);
    console.log("Global Value inside function -x ", x);

    const childFunction = () => {
        console.log("Changes in Global variable ", x += 2);
        console.log("Changes in Local Variable ", y += 4);

    }
    return childFunction;
}

const result = ParentFunction();
console.log("Return Function ", result);

result();
result();
 