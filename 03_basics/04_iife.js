// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // Named iife
    console.log(`DB Connected`);
})();    //<--❌ After writing every iife function semicolon is must otherwise JavaScript will not be abble to understand where it is ending (Try removing this semicolon then the next function will throw a error)

// 👆-- if we wished to call the above function normally then we had to write some thing like "chai()"" but that "chai" is replaced with the first perenthasis block and the "()" is replaced by the second perenthasis block

(function coffe(flavour){
    console.log(`DB Connected ${flavour} Coffe`);   
})('Dark');             //<-- iife function with parameter and argument

((flavour) => {
    console.log(`DB Connected ${flavour} Coffe`);   
})('Cold')             //<-- iife function using a arrow function
