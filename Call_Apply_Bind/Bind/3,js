
const Hero_1 = {
    fname : "Tony",
    lname : "Stark",
    fullname : function(city,state){
        return this.fname + " " + this.lname + " Lives in " + city + " - " + state;
    }
};
const Hero_2 = {
    fname : "Steve",
    lname : "Rogers",
    showSuperPower : function(power){
        return `Super Power is ${power}`
    }
} 
// here we have interchanged the function of each other. (showSuperPower and fullname)

const Hero_2_Details = Hero_1.fullname.bind(Hero_2); 
console.log(Hero_2_Details("Washington, D.C.","USA"));
// Or 
const Hero_1_Details = Hero_2.showSuperPower.bind(Hero_1); 
console.log(Hero_1.fullname("Malibu Point","USA") + " - and " +Hero_1_Details("Can Fly"));