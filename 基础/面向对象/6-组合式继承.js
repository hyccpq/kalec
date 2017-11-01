function Person(name,age) {
    this.name = name;
    this.age = age;
}
Person.prototype = {
    sayName : function () {
        console.log(this.name);
    }
};
Object.defineProperty(Person.prototype,'constructor',{
    enumerable : false,
    value: Person
});

function Engineer(friends,name,age){
    this.friends = friends;
    Person.call(this,name,age);
}
Engineer.prototype = new Person;
var engineer = new Engineer('lolo','kale',23);
engineer.sayName();
console.log(engineer.age);
