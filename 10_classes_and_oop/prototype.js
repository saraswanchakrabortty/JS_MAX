// let myName = "Saraswan       "
// let mychannel = "chai      "

// console.log(myName.trueLength);


// let myHeores = ["thor", "spiderman"]

// let heroPower = {
//     thor: "hammer",
//     spiderman: "slicing",

//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spiderman}`);
//     }
// }


// Object.prototype.saraswan = function(){
//     console.log(`Saraswan is present in all objects.`);
// }

// Array.prototype.heySaraswan = function(){
//     console.log(`Saraswan says hello`);
// }

// heroPower.saraswan()

// myHeores.saraswan()

// myHeores.heySaraswan()

// heroPower.heySaraswan()

const User = {
    name: "chai",
    email: "cjai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__:TeachingSupport                    //<-- Older syntax of prototypal inheritance
}

Teacher.__proto__ = User

// console.log(TASupport.isAvailable)
// console.log(Teacher.name)


// Modern Syntax of Prototypal inheritance

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Me@mo            "

String.prototype.trueLength = function(){
    console.log(this);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()