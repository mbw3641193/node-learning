let http = require('http'); //引用http模块
let fs = require('fs');
let util = require('util');
let url = require('url');  //把一个路径解析成一个对象

let readFile = util.promisify(fs.readFile);

let port = 3000;

let users = [
    {
        id:1,
        username:'admin',
        password:'admin'
    },
    {
        id:2,
        username:'马博文',
        password:'123456'
    },
] ;

http.createServer(async (req,res)=>{  //当请求到来时，会执行回调函数

    //req代表客户端，他是一个可读流
    //res代表服务端，他是一个可写流
    console.log('start-----');
    res.setHeader('Access-Control-Allow-Origin','*'); // 允许跨域; 只配置这一句只有get，post可以跨域  put，delete 需要配置其他请求头
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS') //配置了这一句后，put，delete 就可以跨域了

    let urlObj = url.parse(req.url,true);

    let {pathname,query} = urlObj;  //通过pathname 就可以处理静态文件，分辨出对应的文件格式进行渲染。需要用到  MIME  来规定响应头

    if(pathname === '/user'){  //访问/user就是对用户的增删改查
        let id = query.id;  //获取查询的id  例如：http://localhost:3000/user?id=1
        console.log(req.method);
        console.log(req.headers);
        switch (req.method) {
            case 'GET':
                if(!id){   //如果没有id参数，那么就查询所有用户
                    res.setHeader('Content-Type','application/json;charset=utf-8');
                    res.end(JSON.stringify(users));
                }
                
                break;

            case 'POST':
                let str = '';

                req.on('data',(chunk)=>{
                    
                    str += chunk;   //拼接后的结果是一个字符串
                    console.log(str);
                })
                req.on('end',()=>{
                    let user = JSON.parse(str);
                    user.id = users.length ? users[users.length-1].id + 1 : 1;
                    users.push(user);
                    res.end(JSON.stringify(user));
                })
                break;

            case 'DELETE':
                if(id){
                    users = users.filter(item=>item.id != id);
                    res.end(JSON.stringify({}))
                }
                break;
        
            default:
                break;
        }


        return;
    }


    //第二种写法，pipe
    res.setHeader('Content-Type','text/html;charset=utf-8');

    fs.createReadStream('test/user.html').pipe(res);
    

}).listen(port,()=>{    //端口号 尽量使用 3000以上端口
    console.log(`服务器已经启动在${port}`);
}); 

