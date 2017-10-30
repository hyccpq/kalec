this.color = 'red';//js中这里this换成window对象
let obj = {color:'blue'};

function showColor() {
    console.log(this.color);
}

showColor.call(this);
// console.log(global);