const assert = require('assert');

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 1
  }
};
const obj3 = {
  a: {
    b: 1
  }
};


console.log(assert.deepEqual(obj1, obj1,'same'));
// OK, object is equal to itself
