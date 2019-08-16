//题目： 读取x.txt 与 y.txt中的内容，把他们都一起渲染到页面
let fs = require('fs');
let util = require('util');


//同步写法，废弃。1.耗费性能，2.顺序读取
// let x = fs.readFileSync('test/x.txt','utf8');
// let y = fs.readFileSync('test/y.txt','utf8');

// console.log(x,y);

//异步写法 : 同时读取两个文件

let read = util.promisify(fs.readFile);

//1. Promise.all --并发   调用后会返回一个新的promise实例，可以继续then
Promise.all([read('test/x.txt','utf8'),read('test/y.txt','utf8')]).then((data)=>{
    //data是一个数组类型，对应的是 前面请求的顺序。如果有一个失败了， 就全都失败了，去err
    console.log(data);

}).catch(err=>{
    console.log(err);
})

//2. async await --es7语法，简化promise写法。只能node中使用

async function readBoth(){
    try {
        let [x,y] = await Promise.all([read('test/x.txt','utf8'),read('test/y.txt','utf8')]);
        console.log(x,y,'---async');
    } catch (error) {
        console.log(error);
    }
    
}

readBoth();


//Promise.race()  比谁速度快
//Promise.resolve('123')  可以把字符串转化为promise，就可以用then

//readFile会淹没内存。要及时写出去
