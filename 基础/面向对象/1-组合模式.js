/**
 *
 * @param name
 * @param age
 * @param job
 * @constructor
 */
function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['me','keli'];
}

Person.prototype = {
    constructor : Person,
    sayName : function () {
        console.log(this.name);
    }
}

var p1 = new Person('he',22,'engineer');
var p2 = new Person('kalecgos',23,'Software');
p1.friends.push('jojo');
p1.sayName();
p2.sayName();
console.log(p1.friends);
console.log(p2.friends);