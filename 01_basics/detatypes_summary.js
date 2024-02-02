// Primitive
// 7 types : Strings, Number, Boolean, null, undefined, Symbol, BigInt

// Sysmbol datatype is use to define unique values 
const id = Symbol("135")
const id2 = Symbol("135")
// Here id and id2 is not the same thing

console.log(id === id2);
console.log(id == id2);

//BigInt
const bigNumber = 123456789012345n
console.log(typeof(bigNumber));

//Reference/Non-Primitive
// Arrays, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]

let myObj={
    name: "Saraswan",
    age: 22,
    description: "Programmer",
}

const myFunction = function(){
    console.log("Hello Js");
}