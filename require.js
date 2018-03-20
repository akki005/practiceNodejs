
//steps in requiring module
// 1. Resolving--> Find absolute file path
// 2. Loading --> Determined by the content of the file at the reslved path
// 3. Wrapping --> Gives every module it's private scope by wrapping it with module.wrapper
// 4. Evaluating --> What VM actaully does with the code
// 5. Caching --> Caching the required module for future use



// check the propertie of the module object in console
//console.log(module);


//require and execute the module or file 
//require('./find-me');


//require a file but does not execute it. it resolves the absolute path of the module
//require.resolve('./find-me');

//index.js is the default execution file in module or can be spacified in package.json file in "main" field.
//require('./test_module/');//this will execute index.js file in 'test_module'

//check the exports object of module
//console.log(require('./test_module/'));

//check the print function of test_module from using require.
require('./test_module/')(10,'hi');