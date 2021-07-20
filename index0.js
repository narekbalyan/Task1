const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.on("line", input => {
    fs.readFile(path.normalize(input), (err, data) => {
        if(err) {
            console.error(err);
        }
        
        console.log(data.toString());
    })
})
