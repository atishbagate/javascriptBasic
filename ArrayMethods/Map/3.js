const keyArr = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
]
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}],

const result = keyArr.map(({ key, value }) => {
    return { [key]: value }
})
 

console.log("result ",result);

const newArray = [1,2,3,4,5,6];

// how to use thisArg in js map function 

const result2 = newArray.map(function(value,index,array) {
    if(value>this){ 
        return value*2;
    }
    return value
},2)

console.log("new Array ",result2);