//fileSystem 文件系统  文件的读写
let fs = require('fs');
let {promisify} = require('util');

let mkdir = promisify(fs.mkdir);
let stat = promisify(fs.stat);




//mkdir  创建目录test/mkdir -- 1级
fs.mkdir('test/mkdir',(err)=>{
    // console.log(err);
})





//mkdir  创建目录 a/b/c/d -- 多级
makep = (url,callback) => {
    let urlArr = url.split('/');
    let index = 0;
    make = async (path) => {
        
        if(index>urlArr.length-1) return;

        try {
            await stat(path);
            make(urlArr.slice(0,++index+1).join('/'));  //如果已存在文件夹，则继续执行方法
            
        } catch (error) {

            console.log(error);

            try {

                await mkdir(path);       //如果不存在文件夹，则创建文件夹，再继续执行方法
                make(urlArr.slice(0,++index+1).join('/'));
    
            } catch (error) {
                console.log(error);
            }
        }
        
    
        // console.log(urlArr);
        
       
        

    }
    make(urlArr[index]);

}

makep('a/b/c/d',(err)=>{
    if(err) return console.log(err);
    console.log('创建成功');
})