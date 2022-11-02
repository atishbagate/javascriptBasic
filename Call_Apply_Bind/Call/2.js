function fun1(name,city){
    this.city = city;
    this.name = name;
    this.nameCity = nameCity(name,city)
}
const returnFullName = function(fname,lname){
    return `name is ${fname} - ${lname}.`
}
const nameCity = function(name,city){
    return `${name} - ${city}`
}


function Fun2(name,city,lastName,state){
    fun1.call(this,name,city);
    this.fullName = returnFullName(name,lastName)
    this.lastName = lastName;
    this.state = state;
}
let step1 = new Fun2("atish","pune","bagate","maharashtra")
console.log("Step 1 ",step1.nameCity);