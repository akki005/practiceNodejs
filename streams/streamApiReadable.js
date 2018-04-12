const {
    Readable
} = require('stream');


/* const newReadable = new Readable({
    read(size) {

    }
});
/* newReadable.push("aascacdcsdcsdcsdcsd");
   newReadable.push(null); //It means stream doesn't have any more data 
 */


class CustomReadable extends Readable {
    constructor(options) {
        super(options);
    }
    
    /**
     * 
     * must implement _read() method in order to make it readable stream 
     */
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

const newReadable = new CustomReadable();

newReadable.currentCharCode = 65;

newReadable.pipe(process.stdout);