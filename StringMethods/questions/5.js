//count vovels 

const vovel = 'aeiou';
const ip = "aeiouwerrwoooooo";

function CheckVovels(str){
    let count = 0;
    const op = str.split('').map(
(letter)=>
    { 
        if(vovel.includes(letter)){ 
            count+=1;
            return letter;
        }
    }
)  
return count;
}
const countOp = CheckVovels(ip);
console.log(countOp);
