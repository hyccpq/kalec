{
    let a,b,rest;
    [a,b] = [1,2];
    console.log(a,b);
}

{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6];
    console.log(a,b,rest);
}

{
    let a,b;
    ({a,b}={a:1,b:2})
    console.log(a,b);
}

{
    let a,b;
    [a,b] = [1,2];
    [a,b] = [b,a];
    console.log(a,b);
}

{
    function f() {
        return [1,2];
    }
    let a,b;
    [a,b] = f();
    console.log(a,b);
}

{
    function f() {
        return [1,2,3,4,5,6];
    }
    let a,b;
    [a,,,b] = f();
    console.log(a,b);
}

{
    let o = {p:42,q:true};
    let {p,q} = o;
    console.log(p,q);
}

/**
 * JSON解析
 * */

{
    let metaData = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData;
    console.log(esTitle,cnTitle);
}

{

}