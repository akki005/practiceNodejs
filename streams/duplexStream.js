/*
Duplex streams are streams that implement both the Readable and Writable interfaces.

Examples of Duplex streams include:

    TCP sockets
    zlib streams
    crypto streams

*/


const {
    Duplex
} = require('stream');


class CustomDuplex extends Duplex {

    constructor(option) {
        super(option)
    }

    _write(chunk, encoding, callback) {
        console.log(chunk.toString().toUpperCase());
        callback();
    }

    _read(size) {
        setTimeout(() => {

            if (this.currentCharCode > 90) {
                this.push(null);
                return;
            }
            this.push(String.fromCharCode(this.currentCharCode++));

        }, 100);
    }
}


let newDuplex = new CustomDuplex();

newDuplex.currentCharCode = 65;

process.stdin.pipe(newDuplex).pipe(process.stdout);