// call method with arguments 
const p2 = {
    fullname : function(city,state){
        return this.fname + " " + this.lname + " " + city + " " + state;
    }
}

const opt2 = {
    fname : "atish",
    lname : "bagate"
}

const res2 = p2.fullname.call(opt2,"NYC","USA")
console.log("output of resource ",res2);