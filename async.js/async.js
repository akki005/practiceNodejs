const async=require('async');


let timer1=function(cb){
    setTimeout(()=>{
        console.log('timer1 done')
        cb(null,true);
    },1000);
}

let timer2=function(cb){
    setTimeout(()=>{
        console.log('timer2 done')        
        cb(null,true);
    },1000);
}

async.parallel([timer1,timer2],(err,res)=>{
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
})

