// The map() method creates a new array with the results of calling a provided function on every element in the calling array.

const arr1 = [
    { id: 1, name: 'jane' },
    { id: 2, name: 'iron man' },
    { id: 3, name: 'tony stark' },
];
const array1result = arr1.map((value,index,array)=>{
    return value.id*2;
});
console.log("array result ",array1result);