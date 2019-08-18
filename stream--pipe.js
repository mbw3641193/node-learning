// 30b文件('test/writeStreamCopyDemo.txt')，每次读取4b，读取8次。读取第一次后开始书写('test/writeStream.txt')，只能写1b，然后暂定读取，等drain后再次开始读取
let fs = require('fs');

//官方API
let rs = fs.createReadStream(source,{highWaterMark:4});  //规定水位线，每次只能读取4b
let ws = fs.createWriteStream(target,{highWaterMark:1})  //规定水位线，每次只能写入1b

rs.pipe(ws);  //可读流 pipe到 可写流 中，会自动调用write和end方法



//自己写的
pipe = (source,target) => {
    let rs = fs.createReadStream(source,{highWaterMark:4});  //规定水位线，每次只能读取4b
    let ws = fs.createWriteStream(target,{highWaterMark:1})  //规定水位线，每次只能写入1b

    //开启可读流
    rs.on('data',(chunk)=>{
        console.log(chunk)
        if(ws.write(chunk) == false){  //如果写入不进去了
            rs.pause();  //暂停读取
        }
    })

    ws.on('drain',()=>{
        rs.resume();    //当前读入的内容都写入到了文件中，继续读取
    })

    rs.on('end',()=>{  //当读取完毕，强制将内存中未写完的内容写入到文件中。最后关闭文件
        ws.end();
    })
}

pipe('test/writeStreamCopyDemo.txt','test/writeStream.txt');


//流适合 需要分段的内容，或者大文件 。而不关心其中的内容





