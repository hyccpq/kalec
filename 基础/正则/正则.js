var str = 'sfoi24 23543 sdf 4559';
var re = /\d+/g;
console.log(str.match(re));
console.log(str.search('d'));
console.log(str.replace(re,'_'));