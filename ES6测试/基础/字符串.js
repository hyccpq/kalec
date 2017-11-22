/**
 * 去grup里面测试！
 * */
{
    console.log('a',`\u0061`);
    console.log('a',`\u20BB7`);
    console.log('a',`\u{20BB7}`);
}
// .codePointAt方法
{
    let s = '𠮷';
    console.log('length',s.length);
    console.log('0',s.charAt(0));
    console.log('vue基础',s.charAt(1));
    console.log('2',s.charCodeAt(0));
    console.log('3',s.charCodeAt(1));
    let s1 = '𠮷s';
    console.log('code0',s1.codePointAt(0).toString(16));
    console.log('code1',s1.codePointAt(1));
    console.log('code2',s1.codePointAt(2));
}
// 根据码值给字符
// .fromCodePoint
{
    console.log(String.fromCharCode("0x20bb7"));//es5
    console.log(String.fromCodePoint("0x20bb7"));//es6
}
// 字符串遍历器
{
    let str = '\u{20bb7}abc';
    for(let code of str){
        console.log(code);
    }
}
// 标签模板
{
    let user ={
        name: 'list',
        info: 'heheheh'
    };
    abc`i am ${user.name},${user.info}`;
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
    }
}
{
    console.log(String.raw`Hi\n${1+2}`);
    console.log(`Hi\n${1+2}`);
}