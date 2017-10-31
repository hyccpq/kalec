function Person(){

}

Person.prototype = {
    name : 'kalecgos',
    age : 22,
    sayName : function () {
        console.log(this.name);
    }
};

Object.defineProperty(Person.prototype,"constructor",{
    enumerable : false,
    value : Person
});//让consturctor不能被枚举

var p1 = new Person();
console.log(p1.name);

for(attr in p1){
    console.log(attr);
}