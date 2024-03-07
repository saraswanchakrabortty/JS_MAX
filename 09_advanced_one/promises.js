// const promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is complete.')
//         resolve()
//     }, 1000)                                            // <-- Another way

// })

// promiseOne.then(function(){
//     console.log("Promise Consumed");
// })





promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task 2 is complete.')
        resolve()
    }, 1000)

}).then(function(){
    console.log("Promise Consumed");
})






// const promiseThree = new Promise(function(resolve, reject)){

// }