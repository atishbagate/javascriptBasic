// .slice(start, end): Returns a new array from start to end (excluding end).
// .splice(start, deleteCount, item1, item2, ...): Modifies an array by removing or adding elements.
// .concat(arr): Merges two or more arrays.
// .flat(depth): Flattens a nested array to a specified depth.

let arrr = [1,4,5,3,9,8,4,5];

let sliced = arrr.slice(4,6);
console.log(sliced);

let merge = arrr.concat([10,21]);
console.log(merge);

let nestedArr = [1,2,[3,4,[5,6,[0,0]]],[7,8]];

console.log(nestedArr.flat(3));


