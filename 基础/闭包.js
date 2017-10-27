/*
var name = 'xiaoT';
var obj = {
    name : 'me',
    getName : function() {
        return function(){
            return this.name;
        }
    }
};

var k = obj.getName();
console.log(k());
*/

var name = 'xiaoT';
var obj = {
    name : 'me',
    getName : function() {
        var _this = this;
        return function(){
            return _this.name;
        }
    }
};

var k = obj.getName();
console.log(k());
