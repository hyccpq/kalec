window.onload = function () {
    var oAjax = new XMLHttpRequest();
    oAjax.open('Get','http://chaxun.1616.net/s.php?type=ip&output=json',true);
    oAjax.onreadystatechange = function () {
        console.log(oAjax.readyState);
        if(oAjax.readyState == 4){
            console.log(oAjax.status);
            if(oAjax.status == 200){
                alert(oAjax.responseText);
            }
        }
    };
    oAjax.send(null);
};
