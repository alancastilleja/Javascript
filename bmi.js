const prompt = require('prompt-sync')({sigint: true});
var weight = prompt('How much do you weight in kg? ');
var height = prompt('How tall are you in meters? ');

function BMI(weight_kg, height_m){
    return weight_kg/(Math.pow(height_m,2));
}

var bmi = (Math.round(BMI(weight, height)))

function calculateMsg(x){
    if (x < 18.5){
        return console.log('Your bmi is ' + x + ', so you are underweight.')
    }
    else if(x >= 18.5 || x <= 24.9){
        return console.log('Your bmi is ' + x + ', so you are normal.')

    }
    else{
        return console.log('Your bmi is ' + x + ', so you are overweight.')
    }
}

calculateMsg(bmi);