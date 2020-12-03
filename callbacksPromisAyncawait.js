/* Callbacks are functions passed in to another functions. It's possible becuase functions are first class object in javascript


callback !== Asynchronous


*/

let fs = require('fs');

/**
 * readFilesArray can be used with promises as well as callbacks. It will work with both ways.
 * 
 * the araument "cb = () => {}" is to support promise calls. as promise will only pass one argument in function invocation.
 * 
 * 
 */
const readFilesArray = function (file, cb = () => {}) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
                return cb(err);
            } else {
                const lines = data.toString().trim().split("\n");
                resolve(lines);
                return cb(null, lines);
            }
        });
    });
}


readFilesArray('./data/numbers')
    .then((lines) => {
        console.log("Invoking with promise");
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('total odd numbers -->', oddNumbers.length);
    }).catch((err) => {
        console.log(err);
    });

readFilesArray('./data/numbers', (err, lines) => {
    if (err) {
        throw err;
    } else {
        console.log("Invoking with callback");
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('total odd numbers -->', oddNumbers.length);
    }
});

/**
 * 
 * Async/Await
 * 
 * 
 */
async function countOdd() {
    try {
        let lines = await readFilesArray('./data/numbers');
        console.log("Invoking with async/await");
        const numbers = lines.map(Number);
        const oddNumbers = numbers.filter(number => number % 2 === 1);
        console.log('total odd numbers -->', oddNumbers.length);
    }catch(err){
        console.log(err);
    }
}

countOdd();

function readFile(cb){
    setTimeout(()=>{
        cb("done")
    },10);
}

console.log(readFile())

readFile.then(()=>{
    console.log("done")
})