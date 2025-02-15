// 2. Accessing and Finding Elements
// .indexOf(element): Returns the index of the first occurrence of the element.
// .includes(element): Checks if an element is in the array (returns true or false).
// .find(callback): Returns the first element that matches the condition.
// .findIndex(callback): Returns the index of the first matching element.

let numbers = [10, 20, 30, 40];
numbers.indexOf(20); // 1
numbers.includes(30); // true
numbers.find(num => num > 25); // 30
numbers.findIndex(num => num > 25); // 2
