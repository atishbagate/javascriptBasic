// To check if a property exists in an object in JavaScript, 
// you can use one of the following methods:

// 1. in Operator
// let obj = { name: "John", age: 30 };

// console.log("name" in obj); // true
// console.log("gender" in obj); // false

// 2. hasOwnProperty
// let obj = { name: "John", age: 30 };

// console.log(obj.hasOwnProperty("name")); // true
// console.log(obj.hasOwnProperty("gender")); // false

// 3. undefined Check
// let obj = { name: "John", age: 30 };

// console.log(obj.name !== undefined); // true
// console.log(obj.gender !== undefined); // false


// Each method has its own use case. For example, 
// if you need to check properties including those inherited from the prototype chain, 
// the in operator would be useful. 
// If you only want to check own properties, hasOwnProperty is more appropriate.