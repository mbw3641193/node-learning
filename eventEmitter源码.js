class EventEmitter {
    
    /**
     * 发布订阅，依靠的是 一对多 的关系
     * 订阅的模型是：
     * {'work':[work,work]}
     */

    constructor(){
        this._events = {};
    }

    on(eventName,callback){
        if(!this._events[eventName]){   //如果在实例中，这个名字第一次使用
            this._events[eventName] = [callback];
        }else{
            this._events[eventName].push(callback);
        }

    }

    emit(eventName){
        this._events[eventName].forEach(cb => {
            cb();
        });
    }

    removeListener(eventName,callback){
        if(this._events[eventName]){
            this._events[eventName] = this._events[eventName].filter(cb=>cb != callback);  //排除掉传入的callback，并把新数组重新传入
        }
    }

    once(eventName,callback){
        let fn = () => {
            callback();  
            this.removeListener(eventName,fn); //执行完callback后，移除掉这个订阅
        }
        this.on(eventName,fn);  //绑定到订阅中，当事件执行完之后，删除掉

    }
}


//实例的使用-------------------------------------

let eventEmitter = new EventEmitter();

let work = () => {
    console.log('working...');
}
let workonce = () => {
    console.log('work once...');
}
eventEmitter.on('work',work); 
eventEmitter.on('work',work);  //可以多次订阅相同名字

eventEmitter.once('work',workonce);  //只执行一次

// eventEmitter.removeListener('work',work); //移除订阅

eventEmitter.emit('work');   //因为订阅了两次，所以会输出两次
eventEmitter.emit('work');   //第二次执行，once不会生效
