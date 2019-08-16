//fileSystem 文件系统  文件的读写
let fs = require('fs');
let util = require('util');
//fs 既有同步，又有异步。同步依靠返回值，异步依靠回调、

//1. 同步的读取 文件必须要存在。不能通过/读取内容，因为/表示的是根目录。只能用./  ../ 或者不加 来写
//读取的默认类型是Buffer 解决方案：1。结果加toString() 2。加第二个参数'utf-8'
let result = fs.readFileSync('Buffer.js','utf8');
// console.log(result);



//题目：先读取test1.txt中的内容，然后再通过test1.txt中的内容读取test2.txt中的内容

//这种同步方式废弃，因为同步如果阻塞，会使下面所有代码都无法运行
// let content1 = fs.readFileSync('test/test1.txt','utf8')
// let content2 = fs.readFileSync(content1,'utf8');

// console.log(content2);
// console.log(content1);

//这种方式废弃，因为有回调地狱
// fs.readFile('test/test1.txt','utf8',function(err,data){
//     if(err) return console.log(err);
//     fs.readFile(data,'utf8',function(err,data){
//         if(err) return console.log(err);
//         console.log(data);
//     })
// })

//promise链式结构书写

//1. 自己写promise，但是目前有了util工具，所以废弃
// function read(url){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',function(err,data){
//             if(err) return reject(err);
//             resolve(data);
//         })
        
//     })
// }
//2. util库
let read = util.promisify(fs.readFile)


read('test/test1.txt','utf8').then(result=>{   //还是不美观
    // console.log(result);
    return read(result,'utf8');
}).then(result=>{
    console.log(result);
}).catch(reason=>{
    //处理全部错误
    console.log(reason);
})

//美观的解决方法  async await ------- 终极解决方案
//await特点  后面只能跟随promise 
async function asyncRead(){
    try {
        let content1 = await read('test/test1.txt','utf8');
        let content2 = await read(content1,'utf8');
        console.log(content2 + '------async');
    } catch (error) {
        console.log(error);
    }
    
}

asyncRead();





