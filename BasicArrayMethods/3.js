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

const arrData = [1,2,3,4,5];
console.log(Array.of(arrData,[7,8,9]));
// -----------
const age = [10,23,45,23,43,76,22];
let ageop = age.every((age)=> age > 9);
console.log(ageop);
// -----------
let slicedArr = age.slice(1,3);
console.log(slicedArr);
// ----------
const flatmapArr = age.flatMap(item => [item, item*10]);
console.log(flatmapArr);
// ----------
console.log(flatmapArr.findIndex((item)=> item === 45));
// ----------
console.log(age.find((item)=> item > 23));
// ---------
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
console.log(age.filter((currVal,index) => currVal >=30));
// ------------
let fruitsItr = fruits.keys();
let fullFruits = "";
for (const item of fruitsItr) {
    fullFruits += `${item} - `; 
}
console.log(fullFruits);
// ------------
let mapAge = age.map((item)=> `${item}-`)
mapAge.forEach(element => {
    console.log(element);
});