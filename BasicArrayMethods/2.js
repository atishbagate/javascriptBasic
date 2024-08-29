/*
11. forEach()
12. shift()
13. copyWithin()
14. push()
15. unshift()
16. concat()
17. some()
18. splice()
19. flat()
20. lastIndexOf()
*/

let arr = [1,2,3,4,5];
function printVal(item,index,arr){
    arr[index] = item * 10;
}
// perform action for each element in the iteration 
arr.forEach(printVal);
console.log(arr);
// -----------
// Removes the first element from an array and returns it. 
// it returns an updated array 
arr.shift();
console.log(arr);
// -----------
// Inserts new elements at the start of an array, and returns the new length of the array.
arr.unshift(4);
console.log(arr);
// ----------
// Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const arr2 = [5,6,7];
const concArr = arr.concat(arr2);
console.log(concArr);
// --------
// Determines whether the specified callback function returns true for any element of an array.
const someOP = arr.some(item=> item>300);
console.log(someOP);
// ---------
const fruits = ["Banana", "Orange", "Apple", "Mango"];
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @param start — The zero-based location in the array from which to start removing elements.
// @param deleteCount — The number of elements to remove.
// @param items — Elements to insert into the array in place of the deleted elements.
// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi","banana");
console.log(fruits);
// ------------
// return a new array containing the flat of array 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
// -------
// return the index of the last occurrence of a specified value in an array, or -1 if it is not present.
// takes the 2nd parameter as a starting index to scan.
const fruitss = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruitss.lastIndexOf("Apple"));
// -------

