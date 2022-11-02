const data = {
    name : "Atish",
    info : function(){
        return `name is ${this.name}`
    }
}

const bound = data.info;


const ops  = bound.bind(data);
console.log("OPS ",ops());

const p1 = {
    fname:"atish",
    info:function(){
        return `F name is ${this.fname}`
    }
}

const p2 = {
    fname : "Bagate", 
}
let fname = p1.info.bind(p2);
console.log("output ",fname());