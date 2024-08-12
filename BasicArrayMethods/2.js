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
arr.forEach(printVal);
console.log(arr);
// -----------
arr.shift();
console.log(arr);
// -----------
arr.unshift(4);
console.log(arr);
// ----------
const arr2 = [5,6,7];
const concArr = arr.concat(arr2);
console.log(concArr);
// --------
const someOP = arr.some(item=> item>300);
console.log(someOP);
// ---------
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);
// ------------
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);
// -------
const fruitss = ["Apple", "Orange", "Apple", "Mango"];
console.log(fruitss.lastIndexOf("Apple"));
// -------

