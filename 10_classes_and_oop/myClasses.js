// Syntax of using classes in JavaScript (Syntactyc Suger)

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const user1 = new User("me", "me@me.com", "123");

// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());



// behind the seen of classes (It's all prototyple behaviour and objects😅)
function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const user1 = new User("me", "me@me.com", "123");

console.log(user1.encryptPassword());
console.log(user1.changeUsername());