

// check the propertie of the module object in console
//console.log(module);


//require and execute the module or file 
//require('./find-me');


//require a file but does not execute it
//require.resolve('./find-me');


//index.js is the default execution file in module or can be spacified in package.json file in "main" field.
//require('./test_module/');//this will execute index.js file in 'test_module'

//check the exports onject of module
//console.log(require('./test_module/'));

//check the print function of test_module from using reuire.
require('./test_module/')(10,'hi');