window.onload = init;
function init(){
    var aBtn=document.getElementById('add_button');
    aBtn.onclick=createSticky;
    // for(var i=0;i<localStorage.length;i++){
    //     var key = localStorage.key(i);
    //     if(key.substring(0,6) === "sticky"){
    //         var value = localStorage.getItem(key);
    //         addStickyToDOM(value);
    //     }
    // }
    var stickiesArray = getStickiesArray();
    for(var i=0;i<stickiesArray.length;i++){
        var key = stickiesArray[i];
        console.log(stickiesArray[i]);
        var value = localStorage[key];
        addStickyToDOM(key,value);
    }
}
function getStickiesArray() {
    var stickiesArray = localStorage['stickiesArray'];
    if(!stickiesArray){
        stickiesArray = [];
        localStorage.setItem('stickiesArray',JSON.stringify(stickiesArray));
    }
    else {
        stickiesArray = JSON.parse(stickiesArray);
    }
    return stickiesArray;
}
function addStickyToDOM(key,value) {
    var stickies = document.getElementById('stickies');
    var sticky = document.createElement('li');
    var oSpan = document.createElement('span');
    oSpan.setAttribute('class','sticky');
    oSpan.innerHTML = value;
    sticky.appendChild(oSpan);
    stickies.appendChild(sticky);
    sticky.setAttribute('id',key);
    sticky.onclick = deleteStricky;
}
function createSticky() {
    var value = document.getElementById('note_text').value;
    // var oKey = "sticky_"+localStorage.length;
    // localStorage.setItem(oKey,value);
    // addStickyToDOM(value);
    var stickiesArray = getStickiesArray();
    var currentDate = new Date();
    var key = 'sticky_'+currentDate.getTime();
    localStorage.setItem(key,value);
    stickiesArray.push(key);
    localStorage.setItem('stickiesArray',JSON.stringify(stickiesArray));
    addStickyToDOM(key,value);
}
function deleteStricky(e) {
    var key = e.target.id;
    if(e.target.tagName.toLowerCase()==='span'){
        key = e.target.parentNode.id;
    }
    localStorage.removeItem(key);
    var strickiesArray = getStickiesArray();
    if(strickiesArray){
        for(var i=0;i<strickiesArray.length;i++){
            if(key===strickiesArray[i]){
                strickiesArray.splice(i,1);
            }
        }
        localStorage.setItem('stickiesArray',JSON.stringify(strickiesArray));
        deleteLi(key);
    }

}
function deleteLi(key) {
    var sticky = document.getElementById(key);
    sticky.parentNode.removeChild(sticky);
}