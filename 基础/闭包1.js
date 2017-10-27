function f(x) {
    var temp = x;
    return function (x) {
        temp += x;
        console.log(temp);
    }
}

var a = f(50);
a(5);