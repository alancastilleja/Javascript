const prompt = require('prompt-sync')({sigint: true});
const arr = [];
var lastlast, last = 0;
var current = 0;

var ask = Number(prompt('What number do you want? '));

function fibbonacciGenerator(n){
   for(var x = 0; x < n; x++){
        if (x === 0){
            arr.push(0);
        }
        else if(x === 1){
            arr.push(1);
        }
        else{
            lastlast = arr[x-2];
            last = arr[x-1];
            current = last + lastlast;
            arr.push(current);
        }
    
    } 
    return arr;
}

var output = fibbonacciGenerator(ask);
console.log(output);