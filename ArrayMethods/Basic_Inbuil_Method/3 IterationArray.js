// 3. Iterating Over an Array
// .forEach(callback): Executes a function for each element.
// .map(callback): Creates a new array by applying a function to each element.
// .filter(callback): Creates a new array with elements that pass a condition.
// .reduce(callback, initialValue): Reduces the array to a single value.

let arrr = [1,4,5,3,9,8,4,5];

arrr.forEach((num)=>{
  console.log(num+2);
});

const arrMap = arrr.map((num)=>{
  console.log(num * 2);
  return num*2;
});
console.log(arrMap);
const arrFilter = arrr.filter((num)=>{
  console.log(num % 2 === 0);
  return num %2 === 0;
});
console.log(arrFilter);


const op = arrr.reduce((acc,num)=>{
  console.log(acc + num);
  return acc + num
},0);
console.log(op);