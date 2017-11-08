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
//     if(n === 1)return 1;
//     return n * factorial(n-1);
// }
// console.log(factorial(160));