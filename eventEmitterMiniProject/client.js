const EventEmitter = require('events');
const readline = require('readline');

/**
 * as client object does not have any custom implementation of it's methods or properties we can directly instantiate client from EventEmitter
 */
const client = new EventEmitter();

/**
 * require server.js with  invoking it's exported function so server.js will have reference to the client object
 * 
 */
const server = require('./server')(client);



server.on('response',(resp)=>{
    process.stdout.write(`\u001B[2J\u001B[0;0f`);
    process.stdout.write(resp);
    process.stdout.write("\n\>");
});



/**
 * create interface using readline class to get user inputs
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


/**
 * read the line entered by user in command line
 */
let command,args;
rl.on('line', (input) => {
    [command,...args]=input.split(' ');
    client.emit('command',command,args);
});


