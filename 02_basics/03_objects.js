// Singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Saraswan",
    [mySym]: "myKey1",
    "Full_Name": "Saraswan Chakrabortty", //<-- Cannot access this value with 
    age: 23,
    location: "Mumbai",
    email: "this@that.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Full Name"]);
// console.log(typeof JsUser[mySym]);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
}

console.log(JsUser.greeting())