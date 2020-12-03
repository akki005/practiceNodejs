let fs = require("fs");

function fileStat(path, cb) {
    if (typeof path !== "string") {
        return cb(new TypeError('Not a string'), null);
        //to make it completely async
        //return process.nextTick(cb,new TypeError('Not a string'),null);
    }

    fs.stat(path, (err, stat) => {
        if (err) {
            return cb(err, null);
        } else {
            return cb(null, stat);
        }
    })
} 


// try passing "1" intead of "__dirname".
//Hello will not be printed to console as fileStat is not an async function in case of path is not a string.
fileStat(__dirname, (err, stat) => {
    if (err) {
        throw err;
    } else {
        console.log(stat);
    }
});

console.log('Hello');

Promise