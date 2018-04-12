/**
 * Streams --> Collection of data that might not be available all at once nad don't have to fit in memory.
 * 
 * All streams are instances of Event Emitter in node js
 * 
 * Writable streams are an abstraction for a destination to which data is written.
 */

 /**
  * below program create a very large file quickly using writable stream
  */
const fs = require('fs');
const writableStream = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e6; i++) {
    writableStream.write('this is a streams tutorial, this is a streams tutorial, this is a streams tutorial,this is a streams tutorial,this is a streams tutorial,this is a streams tutorial,this is a streams tutorial,this is a streams tutorial');
}

writableStream.end();