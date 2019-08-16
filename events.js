let EventEmitter = require('events');
let {inherits} = require('util');

//EventEmitter 放在原型链上
function Girl(){

}

let girl = new Girl();

inherits(Girl,EventEmitter);  //发布订阅，相当于{'read',['reading...','reading again']}

//订阅--------------------------------
girl.on('read',(param)=>{    //订阅
    console.log('reading...',param);
})
girl.on('read',(param)=>{    //订阅
    console.log('reading again',param);
})
girl.once('read',(param)=>{    //订阅
    console.log('reading once',param);
})

let fn = (param) => {
    console.log('working...')
}
girl.on('work',fn);
girl.removeListener('work',fn);
//发布--------------------------------
girl.emit('read');  //发布
girl.emit('read','book');
girl.emit('work');

//移除监听
// girl.removeListener('read',fn);

//移除全部监听
// girl.removeAllListeners();