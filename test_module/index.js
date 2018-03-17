console.log('In test_module');

// check the parent property of module object in console. which indicates from where this module has been required
//console.log(module);



//exports.message="checking exports";


//checking the ciircular depenndency.
//console.log(require('../require'));

/**
 * 
 * understanding exports
 * 
 */
//exports.message = "checking exports";



/* 
//below line is not valid. as we can not modify the original exports object. WHY?? 
because exports is a simply a varibale reference of module object.
i.e exports=module.exports
so changing exports will no longer reference to module.exports. so we can change the properties of exports object but not the object itself

// not valid
exports = {
    message: "checking exports"
} 
*/



//to modify exports object we need to use module.exports. 
/* module.exports = {
    message: "checking exports"
}
 */



//check the module wrapper function
//console.log(require('module').wrapper);



/**
 * check if module is executed by require or from command line
 * 
 * require.main ==  module if it's been executed from command line
 * 
 * try from cmd "node test_module 10 hi" 
 */

/* const print = (count, header) => {
    console.log('*'.repeat(count));
    console.log(header);
    console.log('*'.repeat(count));
};

if (require.main == module) {
    console.log(require.main == module);
    print(process.argv[2], process.argv[3]);
} else {
    console.log(require.main == module);
    module.exports = print;
} */