const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const res = words.filter((word)=>{
    if(word.length < 6){
        return word
    }
    return null
})
console.log("RES",res);


// shorter version 
const res1 = arr.filter((wrd)=>(wrd.length < 3) ?  wrd : null);

console.log("res",res1);