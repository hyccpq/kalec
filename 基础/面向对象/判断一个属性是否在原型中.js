function hasPrototypeProprety(object, name) {
    return !object.hasOwnProperty(name)&&name in object;
}

function Person() {
    this.name = 'he';
}
Person.prototype.age = '98';
var xx = new Person();

console.log(hasPrototypeProprety(xx,'age'));