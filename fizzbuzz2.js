const names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];

function randomNames(n){
    return n[Math.floor(Math.random() * (n.length))] + ' is buying lunch today!';
}

console.log(randomNames(names));