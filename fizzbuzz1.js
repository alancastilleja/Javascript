var i;
const output = [];

function fizz(){
    for (i = 1; i <= 100; i++){
        if(i % 3 == 0 && i % 5 == 0){
            output.push('fizzbuzz');
        }
        else if (i % 3 == 0){
            output.push('fizz');
        }
        else if(i % 5 == 0){
            output.push('buzz');
        }
        else{
            output.push(i);
        }
    }
    return output;
}

console.log(fizz());