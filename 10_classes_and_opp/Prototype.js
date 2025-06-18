// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);

let myHeros = ["thor","spideman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
    },
};

Object.prototype.sukhpreet = function() {
    console.log(`Suhpreet is present in all objects`);
};

Array.prototype.heysukhpreet = function() {
    console.log(`Sukhpreet says Hello`);
    
}

// heroPower.sukhpreet();
// myHeros.sukhpreet();
// heroPower.getSpiderPower.sukhpreet();

// heroPower.heysukhpreet();
// myHeros.heysukhpreet();


//inheritance

const User = {
    name: "sukhpreet",
    email: "sukhpreet@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername = "Sukhpreet     ";

String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`This length is: ${this.trim().length}`);
}

console.log(anotherUsername.truelength());
"iceTea".truelength()