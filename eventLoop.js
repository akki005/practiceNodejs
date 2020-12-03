// Promise.resolve().then(() => console.log("promise1 callback"));
// Promise.resolve().then(() => {
//     console.log("promise2 callback");
//     process.nextTick(() => console.log("next tick inside promise2"));
// });
// setImmediate(() => console.log("immediate1 callback"));
// setImmediate(() => console.log("immediate2 callback"));

// const { reject } = require("async");

// process.nextTick(() => console.log("next tick1 callback"));
// process.nextTick(() => console.log("next tick2 callback"));
// process.nextTick(() => process.nextTick(() => console.log("next tick inside next tick callback")));
// setTimeout(() => console.log("set timeout"), 0);
// setImmediate(() => console.log("immediate3 callback"));


/*
 execution  is non-deterministic
setTimeout(() => {
    console.log('timeout');
}, 0);

setImmediate(() => {
    console.log('immediate');
}); */



// timeout_vs_immediate.js
/*

 execution  is deterministic
const fs = require('fs');

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
*/


function test(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('timeout');
      resolve()
    }, 5000);
  })
} 


function test(){
  setTimeout(() => {
    console.log('timeout');
    resolve()
  }, 5000);
}

test().then(test)