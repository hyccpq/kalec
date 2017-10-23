var textarea = document.getElementById('text');
var timeoutId;
textarea.addeventlistener('keyup',function () {
    if(timeoutId){
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(function () {
        // 触发change事件
    },100);
});