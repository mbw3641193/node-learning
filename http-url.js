let http = require('http'); //引用http模块
let fs = require('fs');
let util = require('util');
let url = require('url');  //把一个路径解析成一个对象

let readFile = util.promisify(fs.readFile);

let port = 3000;

http.createServer(async (req,res)=>{  //当请求到来时，会执行回调函数

    //req代表客户端，他是一个可读流
    //res代表服务端，他是一个可写流
    console.log('start-----');

    let urlObj = url.parse(req.url,true);  //true可以把query变为对象格式，方便使用

    let {pathname,query} = urlObj;  //通过pathname 就可以处理静态文件，分辨出对应的文件格式进行渲染。需要用到  MIME  来规定响应头


    


    //第二种写法，pipe
    // res.setHeader('Content-Type','text/html;charset=utf-8');

    // fs.createReadStream('test/hello.html').pipe(res);
    

}).listen(port,()=>{    //端口号 尽量使用 3000以上端口
    console.log(`服务器已经启动在${port}`);
}); 


//url解析后格式------------------------------------------------

// let urlObj = url.parse('localhost:3000/s?a=1&b=2#hash',true);  //true:把query转化为一个对象
// console.log(urlObj) 
// Url {
//     protocol: 'localhost:',
//     slashes: null,
//     auth: null,
//     host: '3000',
//     port: null,
//     hostname: '3000',
//     hash: '#hash',
//     search: '?a=1&b=2',
//     query: [Object: null prototype] { a: '1', b: '2' },
//     pathname: '/s',
//     path: '/s?a=1&b=2',
//     href: 'localhost:3000/s?a=1&b=2#hash' }