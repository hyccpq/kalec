let set = new Set();
let map = new Map();
let arr = [];
let obj = {};
// 增
set.add({t:1});
map.set('t',1);
arr.push({t:1});
obj['t'] = 1;
console.info(set,map,arr,obj);

// 查
let set_exist = set.has({t:1});
let map_exist = map.has('t');
let arr_exist = arr.find(item=>item.t);
let obj_exist = 't' in obj;
console.info(set_exist,map_exist,arr_exist,obj_exist);

// 改
set.forEach(item=>item.t?item.t=2:'');
map.set('t',2);
arr.forEach(item=>item.t?item.t=2:'');
obj['t'] = 2;
console.info(set,map,arr,obj);

// 删除
set.forEach(item=>item.t?set.delete(item):'');
map.delete('t');
let index = arr.findIndex(item=>item.t);
arr.splice(index,1);
delete obj.t;
console.info(set,map,arr,obj);