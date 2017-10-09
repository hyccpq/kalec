window.onload = function(){
    var script = document.createElement("script");
    script.src = "http://freegeoip.net/json/?callback=handleResponse";
    document.body.insertBefore(script, document.body.firstChild);
}
function handleResponse(response){
    // alert("You're at IP address " + response.ip + ", which is in " + response.city + ", " + response.region_name);
    var oDiv = document.getElementById("sales");
    var p = oDiv.getElementsByTagName("p")[0];
    p.innerHTML = "你的ip为:"+response.ip+"<br>"+ "你的城市在:"+response.city+"<br>"+"你所在的区域:"+response.region_name;
}