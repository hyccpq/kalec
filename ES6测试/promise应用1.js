function loadImg(src){
    return new Promise((resolve,reject) => {
        let img = document.createElement('img');
        img.src = src;
        img.onload = function(){
            resolve(img);
        };
        img.onerror = function(err){
            reject(err);
        }
    })
}

function showImgs(imgs){
    imgs.forEach(function (img) {
        document.body.appendChild(img);
    })
}

Promise.all([
    loadImg('http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg'),
    loadImg('http://ww2.sinaimg.cn/large/71dcf4c8gw1ez1si79zvaj22up230ak4.jpg'),
    loadImg('http://img3.redocn.com/tupian/20150430/mantenghuawenmodianshiliangbeijing_3924704.jpg'),
]).then(showImgs);