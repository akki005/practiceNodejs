/**
 * EventEmitter module facilitates the communication between objects in node.
 * 
 * Events does not mean sync or async program.
 * 
 * to use event  emitter with any object just inherit the EventEmmiter class.
 * 
 */
const fs = require('fs');
const EventEmmiter = require('events');

class WithLogs extends EventEmmiter {

    execute(readFile,...args) {
        console.time('execute');
        console.log('before executing');
        this.emit('begin');
        readFile(...args,(err,data)=>{
            if(err){
                this.emit('error',err);
            }else{
                this.emit('data',data);
                console.timeEnd('execute');
                this.emit('end');
            }
        })
        //console.log('After executing');
    }
}

const withLogs = new WithLogs();

withLogs.on('begin', () => {
    console.log('about to execute task')
});
withLogs.on('end', () => {
    console.log('done with execute')
});

withLogs.on('data',(data)=>{
    console.log(`Length --> ${data.length}`);
});


//try running below two function invocation without 'error' event listener. The node process will exist without executing next function.
withLogs.on('error',(err)=>{
    console.log(err);
});

/**
 * uncaughtException can also be used to catch the exception and to terminate node process gracefully. below function will be called multiple time in case of multiple exception to prevent it use 'process.once'. 
 * 
 * 
 */
/* process.on('uncaughtException',(err)=>{
    console.log(err);
    // do some cleanup
    process.exit(1);
}); */


/* process.once('uncaughtException',()=>{
    console.log(err);
    // do some cleanup
    process.exit(1);
});
 */


//Below function invocation throws error and node process will exit with execution next function invocation to prevent this we need to register listener on 'error' event. so node process will not exit and continues it's execution with next function.
withLogs.execute(fs.readFile,'');


withLogs.execute(fs.readFile,__filename);