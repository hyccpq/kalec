window.addEventListener('DOMContentLoaded',function () {
    let draw = function (count) {
        //To do
        console.log(`剩余${count}次`);
    };

    let residue = function* (count) {
        while(count>0){
            count--;
            yield draw(count);
        }
    };

    let star = residue(5);
    let btn = document.createElement('button');
    btn.id = 'start';
    btn.textContent = '抽奖';
    document.body.appendChild(btn);
    document.getElementById('start').addEventListener('click',function () {
        star.next();
    },false);
});