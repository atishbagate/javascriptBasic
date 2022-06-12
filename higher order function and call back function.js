// calculator 
const add = (a,b)=>{
    return a+b;
}

const sub = (a,b)=>{
    return a-b;
}

const mult = (a,b)=>{
    return a*b;
}

const div = (a,b)=>{
    return a/b;
}

const calculator =(num1,num2,operator)=>{
    return operator(num1,num2);
}
console.log(calculator(2,3,mult));

 