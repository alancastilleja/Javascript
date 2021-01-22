const prompt = require('prompt-sync')({sigint: true});
var weight = prompt('How much do you weight in kg? ');
var height = prompt('How tall are you in meters? ');

function BMI(weight_kg, height_m){
    return weight_kg/(Math.pow(height_m,2));
}

var bmi = (Math.round(BMI(weight, height)))

console.log('Your bmi is ' +  bmi)