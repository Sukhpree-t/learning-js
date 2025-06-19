function setUsername(username) {
    //complex DB calls
    this.username = username;
    console.log("called");
    
};

function createUsername(username,email,password) {
    setUsername.call(this, username);

    this.email = email;
    this.password = password;
};

const sukhpreet = new createUsername("Sukhpreet","sukhpreet@thapar.edu","1234");

console.log(sukhpreet);
