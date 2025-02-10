// In JavaScript, map(), filter(), and reduce() are array methods, 
// but they cannot be used directly on objects. However, 
// we can use Object.keys(), Object.values(), 
// or Object.entries() to first convert
//  the object into an array and then apply these methods.

// Use case: Converting objects into an array and modifying their values.
const users = {
    1: { name: "Alice", age: 25 },
    2: { name: "Bob", age: 30 },
    3: { name: "Charlie", age: 35 }
  };

const udpatedUsers = Object.entries(users).map(
    ([id,user]) => ({
        id,
        ...user,
        age:user.age+1,
    }));
console.log(udpatedUsers);

const filteredUsers = Object.fromEntries(
    Object.entries(users).filter(([id,user]) => user.age > 30)
);

console.log(filteredUsers);

// reducer() usecase - Use case: Calculating totals, averages, or merging object data.
const totalAge = Object.values(users).reduce((sum, user) => sum + user.age, 0);

console.log(totalAge);  

// map()	Transforming object values or converting objects to arrays
// filter()	Removing unwanted key-value pairs from an object
// reduce()	Aggregating values (sum, count, transform array to object)
