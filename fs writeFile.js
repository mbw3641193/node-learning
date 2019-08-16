//fileSystem 文件系统  文件的读写
let fs = require('fs');

//读取都是buffer类型，写入用的是utf8

//读取的文件 必须存在；写入的时候如果不存在，会自动创建。如果里面有内容，会覆盖掉
//1.buffer
fs.writeFile('test/write1.txt',Buffer.from('马博文'),(err)=>{
    console.log(err);
});
//2.数字或者字符串
fs.writeFile('test/write1.txt','123444',()=>{
    
});

//追加内容叫 appendFile

