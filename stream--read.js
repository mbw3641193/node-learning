// 流：可以解决 readFile 读取大文件，内存溢出的问题。流 是 边读边写，不会一直读

//分为 可读流 可写流

let fs = require('fs');

//highWaterMark 每次能读取多少 默认64k 默认不需要更改 默认是buffer类型
let rs = fs.createReadStream('test/test2.txt');
// let rs = fs.createReadStream('test/test2.txt',{highWaterMark:1}); //默认不需要更改  
//需要监听事件  数据到来的事件 rs.emit('data',数据);
// console.log(rs);




//这种模式 叫做 非流动模式 ： 监听以后 就叫做 流动模式，data会不停的触发，直到文件中的数据全部读取出来

//1.普通情况，不设置最高水位线并且数据量不超过64k，这样读取即可
rs.on('data',(chunk)=>{  
    console.log(chunk.toString());
})



//2.特殊情况，设置最高水位线或者数据量超过64k，这样读取
let arr = [];  //存放每次data返回的buffer

rs.on('data',(chunk)=>{
    arr.push(chunk);
    console.log(chunk);
})

//流读取结束后的方法
rs.on('end',()=>{   
    
    Buffer.concat(arr).toString();
    console.log(Buffer.concat(arr).toString());
    console.log('end');
})

//--------------------------------------------------
//读取流的时候报错
rs.on('err',(err)=>{
    console.log(err);
})

//控制流的速度

rs.on('data',(chunk)=>{  
    
    rs.pause();  //暂停 -- 暂停的是data的触发

})

setTimeout(() => {
    rs.resume();  //恢复
}, 1000);



