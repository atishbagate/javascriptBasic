const obj = {
    name:"Atish",
    age:28,
    city:"pune"
};

// 1. normal iteration using for...in
for (const key in obj) { 
    console.log(`${key} : ${obj[key]}`);
};
// 2. using Object.keys() -  returns an array of the object's keys.
Object.keys(obj).forEach(key=> {console.log(`${key} : ${obj[key]}`)});

// 3. Object.values() - returns an array of the object's values.
const objArr = Object.values(obj).forEach(value=>{console.log(value)})

// 4. Object.entries -  returns an array of [key, value] pairs.
Object.entries(obj).forEach(([key,value])=>{console.log(`${key} : ${value}`)});


// -------------------------------
// nested object ;
const nestedObj = {
    name:"Atish",
    age:28,
    city:"pune",
    addr:{
        locality:"baner",
        pin:12321,
    }
};
// 1. using Recursive Function (Best for deeply nested objects)
function iterateNestedObj(obj,parentKey=""){
    for (const key in obj) { //condition to iterate object
        if (typeof obj[key] === 'object' && obj[key] !== null) { //condition to check child object.
            iterateNestedObj(obj[key], `${parentKey}${key}.`);
        } else {
            console.log(`${parentKey}${key} :  ${obj[key]}`);
        }
    }
}

iterateNestedObj(nestedObj);

// 2. using recursion with Object.entries 

function recursionWithEntries(obj,parentKey=""){
    
    Object.entries(obj).forEach(([key,value]) => {
        if(typeof value === 'object' && value !== null){
            recursionWithEntries(value, `${parentKey}${key}.`);
        }{
            console.log(`${parentKey}${key} : ${value}`);
        }
    })
}
recursionWithEntries(nestedObj);

// 3. using nested loops - if we know the fixed nested object structure.
const arryOfObj ={
    users: 
    [
        { name:"atish" },
        { name:"sumit" }
    ]
};
arryOfObj.users.forEach((user,index)=>{
    console.log(`User ${index+1}`);
    Object.entries(user).forEach(([key,value]) => {
        console.log(`${key} : ${value}`);
    })
});

 
