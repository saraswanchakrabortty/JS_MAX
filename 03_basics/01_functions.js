// function sayMyName(){
//     console.log("I'm a function");
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4)

// function loginUserMessage(username = "Sam"){  // Parameter witha default value
//     if(!username){     // Same as writing (username === undefined)
//         console.log("Please enter a username");
//         return
//     }

//     return `${username} just logged in.`
// }

// console.log(loginUserMessage("Saraswan"));


function calculateCartPrice(...product_prices){  // ... rest operator
    return product_prices
}

console.log(calculateCartPrice(200,5005,77));

