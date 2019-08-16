let fs = require('fs');  //fileSystem 文件系统
let util = require('util');


// fs.readFile('./module_use/dialog.js','utf8',(err,data)=>{
//     if(err) return console.log(err);
//     console.log(data);
// })

let read = util.promisify(fs.readFile);  //把readFile Promise化

read('./module_use/dialog.js','utf8').then((data)=>{
    console.log(data);
},err=>{
    console.log(err);
});

