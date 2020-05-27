
class EventEmitter{

    constructor(){
        this.listeners = {};
        this.maxListener = 10;
        this.addListener = this.on;
        this.removeListener = this.off;        
    }

    on(event, cb){
        let listeners = this.listeners,
            maxListener = this.maxListener;
        if(listeners[event] &&  listeners[event].length >= maxListener.length){
            throw console.error('exceed the max listeners', maxListener);
        }

        if(listeners[event] instanceof Array){
            if(listeners[event].indexOf(cb) === -1){
                listeners[event].push(cb);
            }
            
        } else {
            listeners[event] = [].concat(cb);
        }
    }

    emit(event, ...args){

        let listeners = this.listeners;

        listeners[event].forEach(cb =>{
            cb.apply(null, args);
        })
    }

    off(event, listener){
        let listeners = this.listeners;
        let arr = listeners[event] || [];
        let i = arr.indexOf(listener);//position
        if(i>=0){
            listeners[event].splice(i,1);
        }
    }

    
    
}


const myEmitter = new EventEmitter();

let cooker = (...args) => {
    console.log('cooker', args);
}

myEmitter.on('wrq',cooker)


myEmitter.emit('wrq','a','b','c');

myEmitter.off('wrq',cooker)


myEmitter.emit('wrq','d');
