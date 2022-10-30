const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

const searchFun = (array, searchFor) => {
   return array.filter((ele) => {
        return ele.toLowerCase().includes(searchFor.toLowerCase())
    })
}

console.log("find ana",searchFun(fruits,"ana"));
console.log("find a",searchFun(fruits,"a"));
console.log("find gra",searchFun(fruits,"gra"));