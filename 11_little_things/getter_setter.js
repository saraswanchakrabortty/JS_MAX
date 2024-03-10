class User {
    constructor(email, password){
        this.email =email
        this.password=password
    }

    get password(){
        return `${this._password}me`
    }

    set password(value){
        this._password = value
    }
}

const me = new User("me@m2.ai", "abc")
console.log(me.password);
