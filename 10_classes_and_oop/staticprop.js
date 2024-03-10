class User{
    constructor(username){
        this.username =username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){
        return `123`
    }
}

const saraswan = new User("Saraswan")
// console.log(saraswan.createID());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email= email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")

iphone.logMe()
console.log(iphone.createID());