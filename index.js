const cluster = require('cluster');

if(cluster.isMaster) {

    for (let i = 0; i < 2; i++) {
        cluster.fork().on("message", (res) => {
            console.log(`The result is ${res}`)
        });
    }
} else {
    let result = 1;

    for (let i = 2; i <= 50; i++) {
        result *= i;
    }

    process.send(result);
}