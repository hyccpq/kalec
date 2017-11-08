{
    function test(x=10,y='xie') {
        console.log(x,y);
    }
    test('xie');
}
{
    function test2(...arg) {
        for(let v of arg){
            console.log(v);
        }
    }
    test2('a',2,5,'b');
}
{
    console.log(...[1,2,3,4]);
    console.log('a',...[1,3,5]);
}

{
    let arrow = v => v*2;
    console.log('arrow',arrow(3))
}
{
    function tail(x) {
        console.log('tail',x);
    }
    function fx(x) {
        return tail(x);
    }
    fx(123);
}
