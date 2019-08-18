let http = require('http'); //引用http模块
let fs = require('fs');
let util = require('util');

let readFile = util.promisify(fs.readFile);

let port = 3000;

http.createServer(async (req,res)=>{  //当请求到来时，会执行回调函数

    //req代表客户端，他是一个可读流
    //res代表服务端，他是一个可写流
    console.log('start-----');

    //第一种写法，readFile读取对应的html，然后写到res中；
    // try {

    //     res.setHeader('Content-Type','text/html;charset=utf-8');  //前台页面会声明utf8，但是为了保险起见，后台也声明一下，防止出现乱码

    //     let result = await readFile('test/hello.html','utf8');
    //     res.end(result);

    // } catch (error) {
    //     console.log(error);
    // }

    //第二种写法，pipe
    res.setHeader('Content-Type','text/html;charset=utf-8');

    fs.createReadStream('test/hello.html').pipe(res);
    

}).listen(port,()=>{    //端口号 尽量使用 3000以上端口
    console.log(`服务器已经启动在${port}`);
}); 