let http = require('http'); //引用http模块


let port = 3000;

http.createServer((req,res)=>{  //当请求到来时，会执行回调函数

    //req代表客户端，他是一个可读流
    //res代表服务端，他是一个可写流
    console.log('start-----');
    res.setHeader('Content-Type',' text/plain; charset=utf8 ');
    res.end('你好');

}).listen(port,()=>{    //端口号 尽量使用 3000以上端口
    console.log(`服务器已经启动在${port}`);
}); 