window.onload = function () {
    var oBtn=document.getElementById('previewButton');
    oBtn.onclick=perviewHandler;
};
function perviewHandler() {
    var oCanvas=document.getElementById('tshirtCanvas');
    var context=oCanvas.getContext('2d');
    fillBackgroundColor(oCanvas,context);
    var aSelectObj=document.getElementById('shape');
    var index=aSelectObj.selectedIndex;
    var shape=aSelectObj[index].value;

    if(shape=='Squares'){
        for(var i=0;i<60;i++){
            darwSquare(oCanvas,context);
        }
    }

    if(shape=='Circles'){
        for(var i=0;i<60;i++){
            darwCircles(oCanvas,context);
        }
    }
};
function darwCircles(canvas,context) {
    var r=Math.floor(Math.random()*20);
    var x=Math.floor(Math.random()*canvas.width);
    var y=Math.floor(Math.random()*canvas.height);
    context.beginPath();

    context.arc(x,y,r,0,2*Math.PI,true);
    context.fillStyle='lightblue';
    context.fill();
};
function darwSquare(canvas,context) {
    var w=Math.floor(Math.random()*40);
    var x=Math.floor(Math.random()*canvas.width);
    var y=Math.floor(Math.random()*canvas.height);
    context.fillStyle='lightblue';
    context.fillRect(x,y,w,w);
};
function fillBackgroundColor(canvas,context) {
    var aSelectColor=document.getElementById('backgroundColor');
    var index=aSelectColor.selectedIndex;
    var bgColor=aSelectColor.options[index].value;
    context.fillStyle=bgColor;
    context.fillRect(0,0,canvas.width,canvas.height);
};