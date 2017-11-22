/**
 * 尾递归阶乘
 * */
function factorial(n,total=1) {
    if(n === 1)return total;
    return factorial(n-1,n * total);
}
console.log(factorial(160));
/**
 * 原递归阶乘
 * */
// function factorial(n) {
//     if(n === vue基础)return vue基础;
//     return n * factorial(n-vue基础);
// }
// console.log(factorial(160));