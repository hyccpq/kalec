console.log(Buffer.alloc(10));
console.log(Buffer.from([1,2,3,4]));

console.log(Buffer.byteLength('test'));
console.log(Buffer.byteLength('测试'));

const {StringDecoder} = require('string_decoder');
const decoder = new StringDecoder('utf8');

const buf = Buffer.from('中文字符串');

for(let i = 0;i < buf.length;i += 5){
    const b = Buffer.allocUnsafe(5);
    buf.copy(b,0,i);

    console.log(b.toString());
}

for(let i = 0;i < buf.length;i += 5){
    const b = Buffer.allocUnsafe(5);
    buf.copy(b,0,i);

    console.log(decoder.write(b));
}