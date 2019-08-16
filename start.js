let util = require('util');
a = 1;

// console.log(global);

//console => console.time('aa') -- console.timeEnd('aa')
console.log(process.env.NODE_ENV);  //NODE_ENV是自己起的,通过这个名字自己区分环境
//在命令行里配置NODE_ENV=dev,或者在vscode中配置NODE_ENV=dev.如果发布到服务器上，服务器没有此环境变量，就会走上线环境
//命令行： set NODE_ENV=dev
let url;
if(process.env.NODE_ENV == 'dev'){
    url = 'http://localhost:3000';
}else{
    url = 'http://www.abc.com';
}
console.log(url);

process.nextTick(()=>{ //在同步队列的最底部 执行
    console.log('nextTick');
}); 

setImmediate((...args)=>{   //排在nextTick后面，setTimeout前面
    console.log(args.length);  //获取参数长度
    console.log('setImmediate');
},'第一个参数','第二个参数')


util.inherits(Child,Parent); //继承公有属性

util.isArray
util.isFunction

util.promisify //把方法转化成promise



//Buffer  缓存区
//
