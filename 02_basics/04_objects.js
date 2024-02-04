// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstName: "Saraswan",
            lastName: "Chakrabortty"
        }
    }
}

// console.log(regularUser.fullName?.userfullname.firstName);

const ob1 = {
    1: "a",
    2: "b"
}   

const ob2 = {
    3: "a",
    4: "b"
}

// const obj3 = Object.assign({}, ob1, ob2)

// const obj3 = {...ob1, ...ob2}

// console.log(obj3);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("toy"));


// Destructuring an object


const course = {
    coursename: "JS MAX",
    price: "999",
    courseInstructor: "Not Me"
}

course.courseInstructor;

const {courseInstructor: instructor} = course //<-- Extracting value from a object and making a alias

// const {courseInstructor} = course //<-- Also possible without making a alias

console.log(instructor);

