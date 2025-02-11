// 1. Object Literals - Using object literals is usually the fastest and most efficient way to create objects in JavaScript. 
// It's straightforward and has the least overhead.
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2021
// };
// console.log(typeof(car));

//3. Object Constructor - Object constructor tends to be slower compared to object literals because it involves more steps and function calls.

// let car = new Object();
// car.make = "Toyota";
// car.model = "Camry";
// car.year = 2021;

// console.log(typeof(car));

// 3. Constructor Function - 
// Creating objects using constructor functions is generally efficient and fast, especially when you need to create multiple objects with the same structure.

// this is the function defined to create an object 
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
  
//   let car = new Car("Toyota", "Camry", 2021);
//   console.log(typeof(car));

// 4. ES6 Classes - Object.create() 
// The Object.create() static method creates a new object, using an existing object as the prototype of the newly created object.
//   ES6 classes are syntactic sugar over constructor functions, 
//   so they have similar performance characteristics. They provide a more intuitive way to work with object-oriented patterns.

// let proto = {
//     make: "Toyota",
//     model: "Camry"
//   };
  
//   let car = Object.create(proto);
//   car.year = 2021;
//   console.log(typeof(car));