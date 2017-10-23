var listNode = document.getElementById('list');

var frag = document.createDocumentFragment();
var x,li;
for(x=0;x<10;x++){
    li = document.createElement("li;");
    li.innerHTML = "List item"+x;
    frag.appendChild(li);
}

listNode.appendChild(frag);