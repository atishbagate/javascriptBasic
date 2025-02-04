// JavaScript provides two ways to access properties of an object:
// 1️⃣ Dot Notation (.) → obj.property
// 2️⃣ Bracket Notation ([]) → obj["property"]

// 1. dot notation 
// const user = {
//     name: "Alice",
//     age: 25,
//   };
  
//   console.log(user.name); // "Alice"
//   console.log(user.age);  // 25

//   🔹 When to Use Dot Notation
// ✔️ Property names are known and valid identifiers (letters, numbers, underscores, but no spaces or special characters)
// ✔️ More readable and concise

// 🔴 Limitations
// 🚫 Cannot be used for dynamic properties
// 🚫 Cannot access properties with special characters, spaces, or numbers at the start
// 🚫 Dot notation does not work if the key has spaces or starts with a number.

// 2. Bracket Notation ([])
// const user = {
//     name: "Alice",
//     age: 25,
//   };
  
//   console.log(user["name"]); // "Alice"
//   console.log(user["age"]);  // 25
  
//   When to Use Bracket Notation
//   ✔️ When property names contain spaces or special characters
//   ✔️ When property names are stored in variables
//   ✔️ When accessing properties dynamically
  
//   🔴 Limitations
//   🚫 Slightly less readable than dot notation
//   🚫 More prone to errors if keys are misspelled in quotes
  
// const key = "age";
// const user = { name: "Alice", age: 25 };

// console.log(user[key]);  // ✅ 25
// console.log(user["name"]); // ✅ "Alice"

// console.log(user.key);  // ❌ undefined (Dot notation treats "key" as literal)

// Using Bracket Notation for Dynamic Computed Properties
// const prefix = "user_";
// const obj = {
//   user_name: "Alice",
//   user_age: 25,
// };

// console.log(obj[prefix + "name"]); // ✅ "Alice"
// console.log(obj[prefix + "age"]);  // ✅ 25


// Using Bracket Notation to Loop Through Object Properties
// const user = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//   };
  
//   for (let key in user) {
//     console.log(`${key}: ${user[key]}`);
//   }
  

//   💡 Best practice:
// ✔️ Use dot notation whenever possible for readability.
// ✔️ Use bracket notation for dynamic, computed, or special-character properties.