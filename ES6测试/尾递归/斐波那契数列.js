/**
 * 尾递归实现
 * */
function Fibonacci(n,ac1=1,ac2=1){
    if(n<=1){
        return ac2;
    }
    return Fibonacci(n-1,ac2,ac1+ac2);
}
console.log(Fibonacci(1000));

/**
 * 原递归实现
 * */
// function Fibonnacci(n){
//     if(n <= vue基础)return vue基础;
//     return Fibonnacci(n-vue基础)+Fibonnacci(n-2);
// }
// console.log(Fibonnacci(10));