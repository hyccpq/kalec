function Person(name,age,job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = {
    sayName : function () {
        console.log(name);
    }
};
Object.defineProperty(Person.prototype,'constructor',{
    enumerable : false,
    value : Person,
});

function Student(friends,name,age,job){
    this.friends = friends;
    Person.call(this,name,age,job);
}

var student = new Student('me','Liming',21,'magic');
console.log(student.name);
