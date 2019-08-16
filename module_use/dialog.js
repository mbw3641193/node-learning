//dialog
console.log('aa');

let sum = (...args) => {
    return args.reduce((prev,next)=>prev+next);
}

//只有两种导出方式
// exports.dialog = Dialog;
//或者
module.exports = sum;