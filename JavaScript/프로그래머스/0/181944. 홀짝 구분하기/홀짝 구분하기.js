
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
   
    let n = Number(line);
    
    if (n % 2 === 1) {
        console.log(`${n} is odd`);
    } else {
        console.log(`${n} is even`);
    }

    rl.close();
});
