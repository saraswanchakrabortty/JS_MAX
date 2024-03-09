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

// promiseOne = new Promise(function(resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task 2 is complete.')
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Promise Consumed");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "me", email: "me@example.com"})
//     },1000)
// })
//<<- A promise with passing value with resolve
// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username:"Bang", email:"bang@bang.com"})
//         }else{
//             reject("ERROR: Something went wrong")
//         }
//     },2000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("The promise is either resolved or rejected");
// })

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ username: "javascript", password: "123" });
//     } else {
//       reject("ERROR: JavaScript went wrong");
//     }
//   }, 2000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive();

// async function getAllUsers() {
//   try {
//     const respone = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await respone.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getAllUsers();


fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})