const prompt =  require('prompt-sync')({sigint: true});

var yearAsked = Number(prompt('What year do you want to check? '));

function leapYear(year){
    if (year % 4 == 0){
        if(year % 100 != 0 || year % 400 == 0){
            return console.log('leap year')
        }
        else{
            return console.log('divisible by 100/not a leap year')
        }
    }
    else{
        return console.log('not divisible by 4/not a leap year')
    }
}
leapYear(yearAsked);
