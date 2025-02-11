// A shallow copy of an object creates a new object but only copies the first-level properties.
//  If the original object has nested objects or arrays, those remain references (not cloned).

//1. shallow cloning using Object.assign()
// const obj1 = { name: "atish", details: { city: "pune" } };
// const shallowCopy = Object.assign({},obj1);

// shallowCopy.name = "omkar";
// shallowCopy.details.city = "nashik";

// console.log(obj1);
// console.log(shallowCopy);
// ✅ Pros:
// ✔️ Simple to use
// ✔️ Works for flat objects

// ❌ Cons:
// ⚠️ Nested objects are still referenced, causing unintended mutations.

// 2. using spread operator 
// const obj1 = { name: "atish", details: { city: "pune" } };
// const shallowCopy = {...obj1};

// shallowCopy.details.city = "nashik";
// console.log(obj1.details.city);

// 3. using Object.create()
// const obj1 = { name: "atish", details: { city: "pune" } };
// const shallowCopy = Object.create(obj1);

// shallowCopy.name="omkar";
// shallowCopy.details.city = "nashik";

// console.log(shallowCopy);



// Deep Cloning -
// A deep copy creates a completely new object and 
// recursively copies all nested objects and arrays, 
// ensuring no reference sharing with the original object.


// 1. using JSON.parse(JSON.stringify(obj))

// const obj1 = { name: "atish", details: { city: "pune" } };
// const deepClone = JSON.parse(JSON.stringify(obj1));

// deepClone.details.city = "nashik";

// console.log(obj1);
// console.log(deepClone);
// ✅ Pros:
// ✔️ Simple, one-liner
// ✔️ Works for nested objects

// ❌ Cons:
// ⚠️ Loses functions, Dates, undefined, and Symbols
// ⚠️ Fails for circular references


// 2. using structuredClone() - recommended
// const obj1 = { name: "atish", details: { city: "pune" }, date:new Date() };

// const deepClone = structuredClone(obj1);

// deepClone.details.city = "nashik";

// console.log(obj1);
// console.log(deepClone);
// console.log(deepClone.date instanceof Date);
// console.log(deepClone.date === obj1.date);
// ✅ Pros:
// ✔️ Handles functions, Dates, Maps, Sets, and circular references
// ✔️ Faster than JSON.stringify()

// ❌ Cons:
// ⚠️ Not supported in older browsers


// 3. using lodash 
// import _ from "lodash";
// const obj1 = { name: "atish", details: { city: "pune" }, date:new Date() };

// const deepClone = structuredClone(obj1);
// deepClone.details.city = "nashik";

// console.log(obj1);
// console.log(deepClone);
// console.log(deepClone.date instanceof Date);
// console.log(deepClone.date === obj1.date);

//4.  manually recursive function creation 
// function deepClone(obj) {
//     if (obj === null || typeof obj !== "object") return obj;
  
//     if (Array.isArray(obj)) return obj.map(deepClone);
  
//     const copy = {};
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         copy[key] = deepClone(obj[key]);
//       }
//     }
//     return copy;
//   }
  
//   const obj4 = { name: "Alice", details: { age: 25 } };
//   const deepCopy4 = deepClone(obj4);
  
//   deepCopy4.details.age = 30;
  
//   console.log(obj4.details.age); // 25 ✅ (No mutation)
//   console.log(deepCopy4.details.age); // 30
//   ✅ Pros:
// ✔️ Full control over cloning logic
// ✔️ Works without external libraries

// ❌ Cons:
// ⚠️ More complex to implement
// ⚠️ Needs handling for Maps, Sets, and functions

// When to Use Deep Clone?
// ✅ Use deep cloning when:

// You want complete separation from the original object.
// The object has nested structures.
// You need to preserve functions, Dates, or special types.