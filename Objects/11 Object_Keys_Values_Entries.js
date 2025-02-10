// Object.keys() - (Get an array of keys)
// 1. Use case: When you only need the keys of an object.
const person = {
    name:"Atish",
    Age:27,
    city:"Pune"
};
console.log(Object.keys(person));
// Loop through keys
Object.keys(person).forEach(key => {
    console.log(`${key}: ${person[key]}`);
  });



//  2. Using Object.values() (Get an array of values)
// Use case: When you only need the values of an object

console.log(Object.values(person)); 
// Output: ["Alice", 25, "New York"]

// Loop through values
Object.values(person).forEach(value => {
  console.log(value);
});

// 3.  Using Object.entries() (Get key-value pairs as arrays)
// Use case: When you need both keys and values together.
console.log(Object.entries(person)); 

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
