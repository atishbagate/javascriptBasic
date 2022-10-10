// the scope chain is used to resolve the value of variable names 

// scope chain in js is lexically defined 

// lexical scoping - > inner function can get access to their 
// parent functions variables but the vice-versa is not true. 
let a = "hai" //globa; scope
const first = ()  =>
{
    let b = "first "
    const second = () =>
    {
        let c = 'second'
        console.log(a+b);
        
        const third = () =>
        {
            let c = 'third'
            console.log(a+b+c);
           
        }
        third();
    }
    second();

}

first();