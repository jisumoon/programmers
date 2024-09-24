const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

const sum = () => {
    rl.on('line', (line) => {
        input = line.split(' ');
        rl.close();  
    });

    rl.on('close', () => {
        const a = Number(input[0]);
        const b = Number(input[1]);
        console.log(`${a} + ${b} = ${a+b}`)
    });
}

sum();

      