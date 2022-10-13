// IIFE - immediately invoked function Expression 
// Closure will memorize the value which are used inside that function. after its parent function is being removed.

const PrivateCounter = (()=> {
    let count = 0; 

    console.log("initial Value ",count);

    return () => {
        count +=1; console.log(count);
    }
})()

PrivateCounter();
PrivateCounter();