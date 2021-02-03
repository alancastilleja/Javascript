const prompt = require('prompt-sync')({sigint:true});

var Name = prompt('What is your name? ');

var newList = [];
newList.push(Name);

function checkList(names){
    var Lists = ['a', 'b', 'c'];
    if(Lists.includes(names)){
        return ('You are on the list');
    }
    else{
        return ('your name not on list');
    }
}

console.log(checkList(Name));
console.log(newList);