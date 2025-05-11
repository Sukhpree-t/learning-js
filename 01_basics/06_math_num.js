const score = 400;
//console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(1));

const otherNum = 128.8267
//console.log(otherNum.toPrecision(3));

const hundreds = 100000
//console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++ Math +++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(4.4));
console.log(Math.ceil(4.3));
console.log(Math.floor(5.9));
console.log(Math.min(4,3,5,6,2,1));
console.log(Math.max(4,3,2,1,4,6,7));


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+1));


const min = 10;
const max = 20;

console.log(Math.floor((Math.random()*(max-min+1)) + min));

console.log(Math.pow(4,2))