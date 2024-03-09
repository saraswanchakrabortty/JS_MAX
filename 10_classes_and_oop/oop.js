
// const user = {
//     username: "Saraswan",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got User Details From Database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }




// const user2 = {
//     username: "Saraswan",
//     loginCount: 8,
//     signedIn: true,

//     getUserDetails: function(){
//         // console.log("Got User Details From Database");
//         // console.log(`Username: ${this.username}`);
//         console.log(this);
//     }

// }


// console.log(user.username);
// console.log(user.getUserDetails());




function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this       //<= When we use the new kayword to create a fresh instence of that object then the coresponding function automatically retuns "this" implicitly
}

const userOne = new User("Sun", 12, true)
const userTwo = new User("Tuitui", 14, true)

console.log(userOne.constructor);
// console.log(userTwo);

// userOne.greeting()