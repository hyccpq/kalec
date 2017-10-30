var arr = [1,2,3,[4,[5,[6]]]];

Array.prototype.each = function (fn) {
    try{
        this.i || (this.i=0);
        for(;this.i<this.length;this.i++){
            var e = this[this.i];
            if(e && e.constructor == Array){
                e.each(fn);
            } else {
                fn.call(e,e);
            }
        }
        this.i=null;

    } catch(ex) {
        //do something
    }
    return this;
};

arr.each(function (item) {
    console.log(item);
});