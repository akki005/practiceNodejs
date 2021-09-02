let cluster = require("cluster");
let child_process = require("child_process");
let num_of_cpus = require("os").cpus().length;

 if(cluster.isMaster) {
console.log(`Master ${process.pid} is running`);

// Fork workers.
for (let i = 0; i < num_of_cpus; i++) {
  let worker;
/*   if (process.execArgv[0] == "--inspect-brk") {
    worker = child_process.fork("/home/akash/practiceNode/worker.js", [], {
      execArgv: ['--inspect-brk']
    });
  } else {
    worker = child_process.fork("/home/akash/practiceNode/worker.js");
  } */

  //  console.log(worker.pid);
  //worker.send(worker.pid);
  cluster.fork();
}
}else{
  setInterval(()=>{
    console.log(`${process.pid}`);
  },2000)
}
