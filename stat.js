//fileSystem 文件系统  文件的读写
let fs = require('fs');
let util = require('util');


//stat 用来判断文件夹状态
fs.stat('test/test1.txt',(err,status)=>{
    console.log('err---'+err);
    console.log(status);

    console.log('isFile---'+status.isFile());  //是否是一个文件
    console.log('isDirectory---'+status.isDirectory());  //是否是一个文件夹



    //atime: access time    访问时间
    //mtime: modify time    数据修改时间
    //ctime: change time    状态修改时间(包括 重命名等。。。)
    //birthtime             创建时间
})
