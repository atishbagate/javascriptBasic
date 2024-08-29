/*
21. of()
22. every()
23. slice()
24. flatMap()
25. findIndex()
26. find()
27. includes()
28. entries()
29. reduceRight()
30. reduce()
31. isArray()
32. filter()
33. keys()
34. map()
*/

// returns the new array containing new array Object. 
const arrData = [1,2,3,4,5];
console.log(Array.of(arrData,[7,8,9]));
// -----------
const age = [10,23,45,23,43,76,22];
// Determines whether all the members of an array satisfy the specified test.
// @param predicate
// A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.
// @param thisArg
// An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
let ageop = age.every((age)=> age > 9);
console.log(ageop);
// -----------
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
let slicedArr = age.slice(1,3);
console.log(slicedArr);
// ----------
// Calls a defined callback function on each element of an array. Then, flattens the result into a new array. This is identical to a map followed by flat with depth 1.
// @param callback
// A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array.
// @param thisArg
// An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value.

const flatmapArr = age.flatMap(item => [item, item*10]);
console.log(flatmapArr);
// ----------
// Returns the index of the first element in the array where predicate is true, and -1 otherwise.
// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1.
// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead
console.log(flatmapArr.findIndex((item)=> item === 45));
// ----------
// Returns the value of the first element in the array where predicate is true, and undefined otherwise.
// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.
// @param thisArg
// If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead.
console.log(age.find((item)=> item > 23));
// ---------
// Determines whether an array includes a certain element, returning true or false as appropriate.
// @param searchElement — The element to search for.
// @param fromIndex — The position in this array at which to begin searching for searchElement.
console.log(age.includes(23));
// ---------
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const list = fruits.entries();
let additionAge = "";
for (let iterator of fruits) {
  additionAge += `${iterator}, `   
}
console.log(additionAge);
// ------------
const numbers = [175, 50, 25];
let numbersOp = numbers.reduceRight((total,number)=> total+=number);
console.log(numbersOp);
// -----------
let letReduceVal = numbers.reduce((acc,num) => acc+=num);
console.log(letReduceVal);
// -----------
console.log(Array.isArray(numbers));
// ------------
// Returns the elements of an array that meet the condition specified in a callback function. 
// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value.
console.log(age.filter((currVal,index) => currVal >=30));
// ------------
// Returns an iterable of keys in the array
let fruitsItr = fruits.keys();
let fullFruits = "";
for (const item of fruitsItr) {
    fullFruits += `${item} - `; 
}
console.log(fullFruits);
// ------------
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// @param callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// @param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
let mapAge = age.map((item)=> `${item}-`)
mapAge.forEach(element => {
    console.log(element);
});