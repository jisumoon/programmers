const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const wordChange = () => {
    rl.on('line', (line) => {
        let result = ''; 

       
        for (let char of line) {
            if (char === char.toUpperCase()) {
                result += char.toLowerCase();  
            } else {
                result += char.toUpperCase();  
            }
        }

        console.log(result);  
        rl.close(); 
    });
};

wordChange();
