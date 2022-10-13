function outer(){
    let outerValue = 100;
    return function test(){
        let a = 200;
        return function innner(){
            return a * outerValue;
        }
    }
}

let test = outer();
let inner = test();

console.dir(inner)