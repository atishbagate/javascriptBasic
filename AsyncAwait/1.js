/*
Async/await is a syntactic sugar on top of promises. 
It provides a more concise way to write asynchronous code, making it easier to read and write.

the async keyword : is used to declare an asynchronous function. 
The await keyword : is used to wait for a promise to be 
resolved before continuing with the execution of the function.

When a Promise is created and the asynchronous operation is started,
 the code after the Promise creation continues to execute synchronously. 
 When the Promise is resolved or rejected, the attached callback function 
 is added to the microtask queue. The microtask queue is processed after
  the current task has been completed but before the next task is processed 
  from the task queue. This means that any code that follows the creation of
   the Promise will execute before the callback function attached to the Promise is executed.

On the other hand, with Async/Await, the await keyword causes the JavaScript engine to pause
 the execution of the async function until the Promise is resolved or rejected.
 While the async function waits for the Promise to resolve, it does not block the call stack, 
 and any other synchronous code can be executed. Once the Promise is resolved, 
 the execution of the async function resumes, and the result of the Promise is returned. If rejected, it throws an error value.
*/
async function call(){
    try {
        
        console.log("Start");

        // this API call 
        const promise = new Promise(
            (res,rej)=>{
                setTimeout(() => {
                    res("resolved...")
                }, 2000);
            }
        );
 

        const output = await promise;
        console.log(output);
        console.log("End");

    } catch (error) {
        console.log("error-",error);
    }
}

call();


async function calling(){
    try {
        const prom = new Promise(
            (res,rej) => {
                setTimeout(() => {
                    res('ok')
                }, 1000);
            }
        );
        const op = await prom;
        console.log(op);
    } catch (error) {
        console.log("err");
    }
}

calling().then(console.log("okokok"))