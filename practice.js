var myName = 'Alan';
console.log(myName);

var a = '3';
var b = '8';

var c = a;
a = b;
b = c;

console.log('a is ' + a);
console.log('b is ' + b);
console.log(myName.length);
console.log(myName.slice(0,2));
console.log(myName.toUpperCase());

const prompt = require('prompt-sync')({sigint: true});
var dogAge = prompt('What is your dogs age? ');
var humanAge = (Number(dogAge) - 2) * 4 + 21;
console.log('Your dog as a human is ' + humanAge);
