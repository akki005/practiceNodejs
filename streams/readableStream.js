/**
 * Readable streams are an abstraction for a source from which data is consumed.
 */
const fs = require('fs');
const server = require('http').createServer();


server.on('request', function (req, res) {
    /**
     * try serving big.file (generate file using fileWriteStream.js) without streams. and check the memory consumption/usage in console. it will buffer the entire file data in memory and the server the buffered data to the client.
     */
/*     fs.readFile('./big.file',function(err,data){
        if(err) throw err;

        res.end(data);
    }); */

    /**
     * To reduce the memory usage by not buffering the entire file data into memory we can use the readable stream of the big.file and as our http response is the writable stream we can directly pipe the data to the response. so instead of buffering entire file in memory it will buffer a chunk of file data in memory and streams file to client in chunks which reduces memory usage drastically
     */

     const readableStream=fs.createReadStream('./big.file');
     readableStream.pipe(res);
});

server.listen(8000);