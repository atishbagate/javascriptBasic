// JavaScript objects are mutable, meaning we can add, update,
//  and delete properties dynamically.
// the different ways to manipulate object properties

// Adding Properties to an Object

// 1.usind dot and bracket notation 
const user = { name: "Alice" };

// ✅ Using Dot Notation
user.age = 25;

// ✅ Using Bracket Notation
user["city"] = "New York";

console.log(user);
// { name: "Alice", age: 25, city: "New York" }

// 2. Updating Properties in an Object
// Updating a property is just like adding it:
// ✔️ If the key exists, it updates the value.
// ✔️ If the key doesn’t exist, it creates a new property.

const user = { name: "Alice", age: 25 };

// ✅ Update age
user.age = 30;

// ✅ Update city (if it doesn’t exist, it will be added)
user.city = "Los Angeles";

console.log(user);
// { name: "Alice", age: 30, city:"Los Angeles"}

const key = "email";
user[key] = "alice@example.com"; // Dynamically add/update

console.log(user);
// { name: "Alice", age: 30, city: "Los Angeles", email: "alice@example.com" }


// 3. Deleting Properties in an Object
const user = { name: "Alice", age: 25, city: "New York" };

// ✅ Delete age property
delete user.age;

console.log(user);
// { name: "Alice", city: "New York" }
