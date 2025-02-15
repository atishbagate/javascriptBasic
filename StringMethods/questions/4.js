// palendrom check 
const ip = "level";

function check(str){
    let revString = str.split('').reverse().join('');   
    return revString === str;
}

console.log(check(ip));