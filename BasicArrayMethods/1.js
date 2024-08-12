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
let arr = ["mango","banana","apple"];
// ----------
const itr = arr.values();
for (const iterator of itr) {
    console.log(iterator);
};
// -----------
console.log(arr.length);
// -----------
const revArr = arr.reverse();
console.log(revArr);
// -----------
const numList = [4,3,2,5,2,5,1,3,5];
console.log(numList.sort());
// -----------
console.log(arr.at(2));
// -----------
const fillArr = [2,4,5,1];
fillArr.fill(1);
console.log(fillArr);
// -----------
const op = Array.from(["1","2","3","4","5"]);
console.log(op);
// -----------
 const arr1 = [1,2,3];
 const joinArr = arr1.join("");
 console.log(joinArr);
// -----------
const arrstr = [1,2,3,4,5];
const val = arrstr.toString();
console.log(val);
// -----------
const arrData = [1,2,3,4,5];
arrData.pop();
console.log(arrData);
// -----------
