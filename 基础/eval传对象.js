var strobj = "{name:'kalecgos',age:22}";
var obj = eval('('+strobj+')');
console.log(obj.name);