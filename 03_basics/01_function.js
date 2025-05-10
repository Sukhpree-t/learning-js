function saymyName() {
    console.log("S");
    console.log("U");
    console.log("K");
    console.log("H");
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("E");
    console.log("T");
}

// saymyName()

function addTwoNumbers(num1,num2) {
    return num1+num2;
}

const sum = addTwoNumbers(2,4)
// console.log(sum);

function calculatecarPrice(var1,var2,...num1) {
    return num1;
}

// console.log(calculatecarPrice(100,200,300,500));

const user = {
    username: 'Sukhpreet',
    age: 19,
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and age is ${anyobject.age}`);
    
}
// handleObject(user)

const newArray = [100,200,400,500]
function returnsecondvalue(anyArray) {
    console.log(anyArray[1]);
}

returnsecondvalue(newArray)
