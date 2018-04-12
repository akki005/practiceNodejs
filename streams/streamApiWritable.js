const {
    Writable
} = require('stream');


/**
 * simplified implementation of writable stream;
 */
/* const CustomWritable = new Writable({
    write(chunk, encoding, callback) {
        console.log(chunk.toString().toUpperCase());
        callback();
    }
}); */


/**************************************Inheritance***********************/
/**
 * writable stream implementation using inheritance;
 */

class CustomWritable extends Writable {
    constructor(options) {
        super(options);
    }

    /**
     * @description need to implement method _write in order to make it writable stream
     * @param {Buffer} chunk 
     * @param {*} encoding 
     * @param {*} callback 
     */
    _write(chunk, encoding, callback) {
        console.log(chunk.toString().toUpperCase());
        callback();
    }
}


let newStream = new CustomWritable();

newStream.write("abcd");
newStream.end();
newStream.on('finish', function () {
    console.log('finished');
});
//piping the writable stream to the stdin readable stream
//comment out newStream.end() before running with below code
//process.stdin.pipe(newStream);