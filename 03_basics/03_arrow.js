// const user = {
//     username: "Saraswan",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`${this.username} , welcome to website`);
//         console.log(this); // <- The context can be checked by logging the value of "this"(keyword)
//     }
// } 

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // If you log the value of "this" globally in node environment then it will give a empty object

// function gondogol(){
    //     let username = "Saraswan"    
    //     console.log(this.username); // <- Cannot use this here because it's not an object
// }
// gondogol()

// const coffe = () => {
//     let username = "Saraswan"    //<-- it's a arrow function
//     console.log(this.username);
// }
// coffe()

// const addTwo = (num1, num2) => {
//     return num1 + num2               //<-- Basic arrow function
// }

// console.log(addTwo(4,6));

// const addTwo = (num1, num2) => num1+num2  //<-- Impplicit return arrow function

// const addTwo = (num1, num2) => (num1+num2) //<-- Same as above

// console.log(addTwo(2,4)); 

// const details = (num1, num2) => (
//     {
//         name : "Saraswan",
//         id : "me@1",     //<-- Returnig a whole object from a arrow function
//         passion : "programming",
//         firstNum : num1,
//         secondNum : num2
//     }
// ) 

// console.log(details(3,4))
