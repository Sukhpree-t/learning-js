class User {
    constructor(username) {
        this.username = username;
    };

    loginMe() {
        console.log(`USERNAME is ${this.username}`);
    };
};

class Teacher extends User {
    constructor(username,email,password) {
        super(username);
        this.email = email;
        this.password = password;        
    };

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    };
};

const sukhpreet = new User("Sukhpreet","sukhpreet@thapar.edu","1234");

sukhpreet.loginMe()

console.log(sukhpreet instanceof User);
