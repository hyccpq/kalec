class Parent {
    constructor(name = 'kale'){
        this.name = name;
    }

    get longName(){
        return 'win '+this.name;
    }
    set longName(value){
        this.name = value;
    }
}

let v = new Parent();
console.info(v.longName);
v.longName = 'kili';
console.info(v.longName);