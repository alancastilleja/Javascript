const prompt = require('prompt-sync')({sigint: true});
var name1 = prompt('What is your name? ')
var name2 = prompt('What is the other name? ')
var n = Math.random();
n = Math.floor((n * 100) + 1);
if(n >= 50){
    console.log('greater than 50');
}
else{
    console.log('less than 50')
}