
const commonMethods = {
    fullname : function(city,state){
        return this.fname + " " + this.lname + " Lives in " + city + " - " + state;
    }
}

const Hero_1 = {
    fname : "Tony",
    lname : "Stark"
};
const Hero_2 = {
    fname : "Steve",
    lname : "Rogers"
}

const Hero_1_Details = commonMethods.fullname.apply(Hero_1,["Malibu Point","USA"]);
const Hero_2_Details = commonMethods.fullname.apply(Hero_2,["Washington, D.C.","USA"]);
console.log(Hero_1_Details);
console.log(Hero_2_Details);