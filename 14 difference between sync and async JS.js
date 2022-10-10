"async and await make promises easier to write"

// async makes a function return a Promise

// await makes a function wait for a Promise
//  sync format this is sync method 
// which  make wait to function 2 to execute function1 and later resume the function2
// const function1 =() =>{
//     console.log(`function 1 is called`);
// }
// const function2 =() => {
//     console.log(`function 2 is called`);
//     function1();
//     console.log(`function 1 is called again`);
// }
// function2(); //callling a function to execute

// now asynchronous method  is used 
// this method execute the function which takes small time to complete and
// later resume the function which consume long time .

const function1 = () => {
    setTimeout(() => {
        console.log(`function1 is called`);
    },2000);
}
const function2 = () => {
    console.log(`function2 is called`);
    function1();
    console.log(`function2 is called again`);
}
function2(); //this is to call the function2