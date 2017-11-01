function SuperType(name,color){
    this.name = name;
    this.color = color;
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name,color,job) {
    this.job = job;
    SuperType.call(this,name,color);
}

inheritPrototype(SubType,SuperType);

function inheritPrototype(subType,superType) {

    var F = function(){};
    F.prototype = superType.prototype;
    subType.prototype = new F;
    // subType.prototype = superType.prototype;
    // subType.prototype.constructor = subType;

    subType.superClass = superType.prototype;
    if(superType.prototype.constructor === Object.prototype.constructor){
        superType.prototype.constructor = superType;
    }




    // var prototype = Object.create(superType.prototype);
    // console.log(prototype);
    // prototype.constructor = subType;
    // subType.prototype = prototype;
}

SubType.prototype.toJob = function () {
    console.log(this.job);
};

var sub = new SubType('he','black','pika');
sub.sayName();
console.log(sub.job);
// var sup = new SuperType('kska','y','jj');
// sup.toJob();