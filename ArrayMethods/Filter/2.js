// program to find prime number from array.
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const primeFuntion = (value)=>{
    if(value > 1 && value%2 === 0)
    {
        return value
    } 
    return null
};
const primeNum = array.filter(primeFuntion)
console.log("Prime number list ",primeNum);