const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const printRepeatedString = () => {
    let input = [];
    
    rl.on('line', (line) => {
        input = line.split(' ');  
    }).on('close', () => {
        const str = input[0];  
        const n = Number(input[1]); 
        
        const result = str.repeat(n);
        console.log(result);
    });
};

printRepeatedString();

