function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = {
    sayName : function () {
        console.log(this.name);
    }
};

function Xiao(friends) {
    this.friends = friends;
}

Xiao.prototype = new Person('keli',22);
var X = new Xiao();
X.sayName();
