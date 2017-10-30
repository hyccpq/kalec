function Person() {

}
var obj = new Person();

console.log(Person.prototype == obj.__proto__);

console.log(obj.__proto__.constructor);

var a =new Person();
console.log(obj.__proto__.isPrototypeOf(a));
console.log(Person.prototype.__proto__ == Object.prototype);
console.log(Person.prototype.__proto__.__proto__ == null);
console.log(a instanceof Person);

var prototypeObj = Object.getPrototypeOf(a);
console.log(prototypeObj == Person.prototype);