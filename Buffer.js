// let Buffer = require('buffer');
//buffer(16进制)

// 字节
// 1024b = 1k
// 8bit（8个二进制） = 1b

// 1个汉字 = 3b = 24bit

//通过长度定义buffer

let buffer = Buffer.alloc(100);   //100的单位是字节长度.申请了100个空内存空间/相对来说比较耗性能 - 最为常用
let bufferUnsafe = Buffer.allocUnsafe(100);   //100的单位是字节长度.申请了100个空内存空间/不会清空内存
console.log(buffer);
console.log(bufferUnsafe);
//通过数组定义buffer
let bufferArray = Buffer.from([17,18,19]);  //自动把10进制 转化成 16进制  / 10进制最大为255
console.log(bufferArray);
//字符串创建buffer
let bufferString = Buffer.from('马博文');  //一个汉字3个字节，所以这个buffer长度为9
console.log(bufferString);
console.log(bufferString.length);       //9
console.log(bufferString.toString());   //'马博文'

let buf1 = Buffer.from('马');
let buf2 = Buffer.from('博文');

var fullBuffer = Buffer.alloc(9);

//拷贝buffer
//Buffer.copy(targetBuffer: Uint8Array, targetStart?: number, sourceStart?: number, sourceEnd?: number): number
buf1.copy(fullBuffer,0);
buf2.copy(fullBuffer,3);    
console.log(fullBuffer.toString());

//Buffer.concat(list: Uint8Array[], totalLength?: number): Buffer
let fullBuffer2 = Buffer.concat([buf1,buf2]).toString();
console.log(fullBuffer2);

//转化为base64  => 进制转化
let buf64 = Buffer.from('马'); 
console.log(buf64);  //e9 a9 ac
console.log(buf64.toString('base64'));  //6ams (base64=>) 马

//base64原理
//1. 把16进制 转化为 2进制  toString()
console.log((0xe9).toString(2));  //11101001
console.log((0xa9).toString(2));  //10101001
console.log((0xac).toString(2));  //10101100

//把24位数字 改成 6x4 格式,并在每位最前面加00
//00 111010    00 011010    00 100110    00 101100

//2. 把这些值转化为10进制，去可见编码中取值  parseInt()
console.log(parseInt('00111010',2));    //58
console.log(parseInt('00011010',2));    //26
console.log(parseInt('00100110',2));    //38
console.log(parseInt('00101100',2));    //44

//3. 
let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += 'abcdefghijklmnopqrstuvwxyz';
str += '0123456789';
str += '+/';

console.log(str[58]+str[26]+str[38]+str[44]);   //6ams