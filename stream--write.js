// 流：可以解决 readFile 读取大文件，内存溢出的问题。流 是 边读边写，不会一直读

//分为 可读流 可写流

let fs = require('fs');

let ws = fs.createWriteStream('test/writeStream.txt'); //默认可写流，默认要占用16k内存。


//一共有两个方法：write  end

ws.write('1');  //写数据，只能放字符串类型，或者buffer类型
ws.write('2');
let flag = ws.write('3',()=>{  //该方法是异步方法，并且有返回值：boolean类型--
    console.log('aaa');
});
console.log(flag);


ws.end('---end');  //end是一个同步方法。调用后，会把之前所有write内容以最快速度写入文件

ws.on('drain',()=>{  // 当 读入的文件 全部读入后 就回复读取
    console.log('消化了所有的内容');
})


// copy 流程：  比如：300k文件，每次读取64k，读取5次。读取第一次后开始书写，只能写16k，然后暂定读取，等drain后再次开始读取




