const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const numArr = [1,2,3,4,5,6,7,8,9,10];

const getMaxVal = (a,b) => Math.max(a,b);
const reduceFun = numArr.reduce(getMaxVal,10);
const reduceFun2 = numArr.reduce(getMaxVal,5);

console.log("getting max value ",reduceFun);
console.log("getting max value 2 ",reduceFun2);

const addingNum = (a,b) => a+b;
// to add numbers in array 
const addingNumArr = numArr.reduce(addingNum,5);

console.log("Adding Number ",addingNumArr);

