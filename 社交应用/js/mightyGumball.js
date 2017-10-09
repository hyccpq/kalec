window.onload = function () {
    var url = "http://ip.chinaz.com/getip.aspx";
    var xhr = new XMLHttpRequest();

    xhr.open("GET",url);
    xhr.onreadystatechange = function () {
        alert(xhr.readyState);
        if(xhr.readyState == 4&&(xhr.status==200||xhr.status == 0)){
            // console.log("我擦");
            displayLuck(xhr.responseText);
        }
        alert(xhr.status);
    };

    xhr.send(null);
}
function displayLuck(luck) {
    var oDiv = document.getElementById("sales");
    var p = oDiv.getElementsByTagName("p")[0];
    p.innerHTML = "你今天" + luck;
}