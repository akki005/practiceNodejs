//The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. 


/*
A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.
*/
const myFirstPromise = new Promise((resolve, reject) => {
    // do something asynchronous which eventually calls either:
    //
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
  });