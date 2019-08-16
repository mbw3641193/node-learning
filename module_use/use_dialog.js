//调用dialog

//require是一个同步的方法。同步方法一般都有返回值，所以用一个变量接收一下。require中还有缓存机制，如果引入多个相同的，
let sum = require('./dialog');

console.log(sum(1,2,3)); //拿到的是 dialog 页面的 exports对象中的属性