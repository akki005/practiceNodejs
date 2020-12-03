// console.log(global);
// console.log(Glo);


function callbackFunc(){
    console.log("Hello")
}

function test(arg,cb){
    cb()
    console.log(arg)
}

test("check",callbackFunc)
