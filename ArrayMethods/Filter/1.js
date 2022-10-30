const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const res = words.filter((word)=>{
    if(word.length < 6){
        return word
    }
    return null
})
console.log("RES",res);