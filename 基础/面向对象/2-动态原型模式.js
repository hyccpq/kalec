function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if(typeof this.sayName != 'function'){
        Person.prototype.sayName = function () {
            console.log(this.name);
        }
    }
}

var me = new Person('kalecgos',22,'student');
me.sayName();