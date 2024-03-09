// function multipleBy5(num){
//     return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);


function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(){            //<== Injecting a function as a protoype in the previously created function createUser
    this.score++
} 
createUser.prototype.printMe = function(){
    console.log(`Price is ${this.price}`);
}


const chai = new createUser("chai", 25)       //<== The use of the new keyword is must to tell that new prototype is been injected
const tea = new createUser("tea", 250)


chai.printMe()