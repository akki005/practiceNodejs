/**
 * Transform streams are Duplex streams where the output is in some way related to the input.
 * 
 */

 const { Transform } = require('stream');


 class CustomTransform extends Transform{

    /**
     * _transform acts as _write method for writable stream
     * @param {Buffer} chunk 
     * @param {*} encoding 
     * @param {*} callback 
     */
    _transform(chunk,encoding,callback){
        // this makes the stream readable
        this.push(chunk.toString().toUpperCase());
        callback();
    }

 }

 let transform = new CustomTransform();

 process.stdin.pipe(transform).pipe(process.stdout);