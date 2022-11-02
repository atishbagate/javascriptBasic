const person = {
    fullinfo: function () {
        return this.fname + " " + this.lname;
    }
}

const p1 = {
    fname : "atish",
    lname : "bagate"
}

const op1 = person.fullinfo.call(p1);
console.log("output p1 ",op1);