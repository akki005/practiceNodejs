/**
 * process.nextTick is executed when all current operations (i.e. in the callstack) has been finished in current phase of event loop and before continuing the event loop.
 * 
 * the nextTickQueue will be processed after the current operation completes, regardless of the current phase of the event loop.
 * 
 * any time you call process.nextTick() in a given phase, all callbacks passed to process.nextTick() will be resolved before the event loop continues. 
 * 
 * 
 * process.nextTick() fires immediately on the same phase
 * setImmediate() fires on the following iteration or 'tick' of the event loop
 * process.nextTick() fires more immediately than setImmediate()
 */









let fs=require('fs');
//Execute below code to understand the setTimeout with 0ms and setImmitdiate. run it multiple time
/* function Timers(){
    
    
    setTimeout(()=>{
        console.log('Inside Set Timeout');
    },0);
    setImmediate(()=>{
        console.log('Inside set immidiate');
    });
}

Timers(); */



//By using process.nextTick() we guarantee that fileStat() always runs its callback after the rest of the user's code and before the event loop is allowed to proceed.


function fileStat(path,cb){
    if(typeof path !== "string"){
        return cb(new TypeError('Not a string'),null);
        //to make it completely async
        //return process.nextTick(cb,new TypeError('Not a string'),null);
    }

    fs.stat(path,(err,stat)=>{
        if(err){
            return cb(err,null);
        }else{
            return cb(null,stat);
        }
    })
}


// try passing "1" intead of "__dirname".
//Hello will not be printed to console as fileStat is not an async function in case of path is not a string.
fileStat(__dirname,(err,stat)=>{
    if(err){
        throw err;
    }else{
        console.log(stat);
    }
});

console.log('Hello');