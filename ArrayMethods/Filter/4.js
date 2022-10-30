const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
const numArr = [1,2,3,4,5,6];


const thisArgArr = numArr.filter((numb,index,arr)=>{
    if(numb > 3){
        return numb
    } 
},3)
console.log("using this Arg ",thisArgArr);


// making some Action on Array CRUD

const ChangeWord = fruits.filter((word,index,arr)=>{
    arr[index+1] += " added";
    return word.length > 6
})

console.log("Change Word ",ChangeWord);
console.log("Fruts Array  ",fruits);