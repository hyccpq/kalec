class Queue{
    constructor(content=[]){
        this._queue=[...content];
    }
    shift(){
        const value=this._queue[0];
        this._queue.shift();
        return value;
    }
    push(n){
        this._queue.push(n);
        return this._queue.length;
    }
}
let q=new Queue([1,2,3,4]);
q.shift();
q.push(5);
console.log(q._queue);
// console.log(q._queue.length);