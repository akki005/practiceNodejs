/**
 * 
 * The net module provides an asynchronous network API for creating stream-based TCP or IPC servers (net.createServer()) and clients (net.createConnection()).
 * 
 * test it using 'telnet localhost <port>'.
 * 
 * try connecting multiple clients to chat between them
 */


let net = require('net');

/**
 * server is an EventEmitter object
 */
let server = net.createServer();
let connectedClients = {};
let counter = 0;

function timeStamp() {
    let time = new Date();
    return time.getHours() + ":" + time.getMinutes();
}


server.on('connection', (socket) => {

    socket.id = counter++;
    /**
     * A net.Socket is also a duplex stream, so it can be both readable and writable, and it is also a EventEmitter.
     */
    //console.log(socket.address());

    socket.write('Please enter your name --> ');

    function broadCastToOther(message,data) {
        Object.entries(connectedClients).forEach(([key, soc]) => {
            if (socket.id == key) {
                return
            } else {
                soc.write(message);
                if(data){
                    soc.write(data);
                }
                soc.write(`\n`);
                //
            }

        });
    }
    socket.on('data', (data) => {

        if (!connectedClients[socket.id]) {
            socket.name = data.toString().trim();
            connectedClients[socket.id] = socket;
            socket.write(`Welcome ${socket.name}`);
            socket.write(`\n`);
            broadCastToOther(`${socket.name} just joined the group`);
        } else {
            broadCastToOther(`${socket.name}@${timeStamp()} says `,data);
        }
    });

    socket.on('end', () => {
        delete connectedClients[socket.id];
        broadCastToOther(`${socket.name} left the group`);
        console.log('client got disconnected');
    });

});

server.on('error', (err) => {
    throw err;
});


server.listen('8000', () => {
    console.log('server bound');
});