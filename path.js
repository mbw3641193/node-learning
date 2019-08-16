let path = require('path');

console.log(path.join(__dirname,'./a','./b'))  //拼接路径

console.log(path.resolve('./a','./b'))  //  解析一个绝对路径出来 与join方法 选其一使用即可

//看一下系统的分隔符
// path.win32.delimiter;
// path.posix.sep;