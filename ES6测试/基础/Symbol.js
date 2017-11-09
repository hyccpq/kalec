{
    let a1 = Symbol('abc');
    let obj = {
        [a1]:'123',
        'abc':345,
        'c':456,
    };
    console.log(obj);
    for(let [key,value] of Object.entries(obj)){
        console.log('let of',key,value);
    }

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    });

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys',item,obj[item]);
    })
}