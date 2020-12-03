/**
 * 
 * Http module is designed with streaming and low latency in mind
 */

/**
 * createServer() returns an event emitter object
 */
const server = require('http').createServer();


/**
 * server is an event emitter object. 'request' event is emitter whenever a client connects to this http server.
 * 
 * Node process will not exit as it has a request handler to server incoming 'request' events
 */
server.on('request', function (req, res) {
    res.writeHead(200, {
        'content-type': 'text/plain'
    });

    /**
     * req - http.IncomingMessage -  readable stream
     * res - http.ServerResponse -  writable stream
     */
    /**
     * res.write sends data to client in stream instead of sending entire bunch of data at once.
     * res.write will not terminate connection with client we must use res.end to terminate connection with client
     */
    res.write('writing data in stream\n');

    setTimeout(function () {
        res.write('sending another bunch after 1 sec\n');

        /**
         * res.end tells http to terminate the connection of client with the server if not called connection will persist and will be terminated after a default timeout set in server.timeout. so we must end the connection with client when we are done wih sending data.
         */
        res.end('Bye\n');
    }, 10000);
});

server.listen(9002);