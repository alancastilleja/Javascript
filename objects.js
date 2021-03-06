function BellBoy (name, age, languagesLearned){
    this.name = name;
    this.age = age;
    this.languages = languagesLearned;
    this.clean = (event) => {
        console.log('cleaning ' + event);
    }
}

var bellboy1 = new BellBoy('alex', 10, ['english', 'french']);
bellboy1.clean('poop');
console.log(bellboy1);