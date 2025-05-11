const user = {
    username: "Sukhpreet",
    age: 19,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "Sam";
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = 'Sukhpreet'
//     console.log(this.username);        //this is not able to work in functions
    
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => {
    let username = 'Sukhpreet';
    console.log(this);
}
// chai()

// const addTwonumbers = (num1,num2) => {
//     return num1+num2;
// }

// const addTwonumbers = (num1,num2) => num1+num2;
// const addTwonumbers = (num1,num2) => (num1+num2);

// console.log(addTwonumbers(2,3));

// const addTwonumbers = () => ({username: 'Sukhpreet'})
// console.log(addTwonumbers());

const myArray= [2,3,4,5]
myArray.forEach()

