
// function one() {
//     const username = "Saraswan"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//         console.log(website);
//     }

//     console.log(website);
    
//     two();
// }

// one()


// ++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++

// *************************** Function *******************************

// console.log(addOne(4));  // Function can be invoked berfore it's declaration

// function addOne(num){
//     return num+1
// }

// *************************** Function *******************************


// *************************** Expression *******************************

// console.log(addTwo(4)); // Expression cannot be invoked berfore it's declaration !!!

const addTwo = function(num){
    return num+2
}

console.log(addTwo(4));

// *************************** Expression *******************************
