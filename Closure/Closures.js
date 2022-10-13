// this is the notes for Closure in js 

// defination -> A closure is a function having access to the parent scope, even after the parent function has closed.

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