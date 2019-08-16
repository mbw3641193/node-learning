//fileSystem 文件系统  文件的读写
let fs = require('fs');
let util = require('util');


let read = util.promisify(fs.readFile);
let write = util.promisify(fs.writeFile);


//1.同步方法    //题目：把test2.txt拷贝到 testcopy2.txt
copySync = (source,target) => {
    try {

        let result = fs.readFileSync(source,'utf8');
        fs.writeFileSync(target,result);

    } catch (error) {

        console.log(error);

    }
    
}
copySync('test/test2.txt','test/testcopy2.txt');

//2. 异步方法   //题目：把test2.txt拷贝到 testcopy3.txt
copy = async (source,target) => {
    try {
        
        let result = await read(source,'utf8');
        write(target,result);

    } catch (error) {
        console.log(error);
    }
}

copy('test/test2.txt','test/testcopy3.txt');
