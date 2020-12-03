const fs = require('fs');
/**
 * zlib is transform stream
 */
const zlib = require('zlib');
const filePath = '/home/akash/practiceNode/big.file';


fs.createReadStream(filePath)
.pipe(zlib.createGzip())
.on('data',()=>{
    process.stdout.write('.');
})
.pipe(fs.createWriteStream(filePath+'.gz'))
.on('finish',()=>{
    console.log('done');
});