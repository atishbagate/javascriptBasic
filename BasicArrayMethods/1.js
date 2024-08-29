console.log("Basic array methods.");
/*
1. values()
2. length()
3. reverse()
4. sort()
5. at()
6. fill()
7. from()
8. join()
9. toString()
10. pop()
*/
let arr = ["mango","banana","apple","avacado","lime"];
// ----------
// return the iterator object  for a given Array.
const itr = arr.values();
for (const iterator of itr) {
    console.log(iterator);
};
// -----------
// length property return the length in number.
console.log(arr.length);
// -----------
// reverse the given array.
// reverse mutates the original array and returns the reference of original array.
const revArr = arr.reverse();
console.log(revArr);
// console.log(arr);
// -----------
// sorting done 
// reverse mutates the original array and returns the reference of original array.
// Function used to determine the order of the elements. 
// It is expected to return a negative value if the first argument is less than the second argument, 
// zero if they're equal, and a positive value otherwise. 

// If omitted, the elements are sorted in ascending, ASCII character order.
const numList = [4,3,2,5,2,5,1,3,5];
console.log(numList.sort());
console.log(arr.sort());
console.log(arr);
// -----------
// get the value at the index  

console.log(arr.at(2));
// short form
console.log(arr[2]); 
// -----------
const fillArr = [2,4,5,1];
fillArr.fill(1);
console.log(fillArr);
// -----------
const op = Array.from(["1","2","3","4","5"]);
console.log(op);
// -----------
// return a new string containing the below conditions.
 const arr1 = [1,2,3];
 const joinArr = arr1.join("");
 console.log(joinArr);
// -----------
// return string representation of array. 
const arrstr = [1,2,3,4,5];
const val = arrstr.toString();
console.log(val);
// -----------
// remove element from back of array 
const arrData = [1,2,3,4,5];
arrData.pop();
console.log(arrData);
// -----------
