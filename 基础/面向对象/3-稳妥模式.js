// 1.不得使用this
// 2.不使用new调用构造函数

function Person(name) {
    var obj = new Object();

    obj.sayName = function () {
        console.log(name);
    };

    return obj;
}

var friend = Person('he');
friend.sayName();