{
    let o = 1;
    let k = 2;
    let es6={
        o,
        k
    };
    console.log(es6);
    let es6_method = {
        hellow(){
            console.log('hellow');
        }
    };
    es6_method.hellow();
}

// 属性表达式
{
    let a = 'b';
    let es6_obj = {
        [a] : 'c'
    };
    console.log(es6_obj);
}

// 新增的API
{
    console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
    console.log('数组',Object.is([],[]),[]===[]);
    console.log('拷贝',Object.assign({a:'a'},{b:'b'},{c:'c'}));

    let test = {k:123,o:456};
    for(let [key,value] of Object.entries(test)){
        console.log([key,value]);
    }
}

