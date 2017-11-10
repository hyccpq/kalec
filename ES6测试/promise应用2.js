function loadImg(src) {
    return new Promise((resolve,reject) => {
        let img = document.createElement('img');
        img.src = src;
        img.onload = function () {
            resolve(img);
        };
        img.error = function (err) {
            reject(err);
        }
    })

}

function showImg(img) {
    let p = document.createElement('p');
    p.appendChild(img);
    document.body.appendChild(p);
}

Promise.race([
    loadImg('http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg'),
    loadImg('http://ww2.sinaimg.cn/large/71dcf4c8gw1ez1si79zvaj22up230ak4.jpg'),
    loadImg('test.jpg'),
]).then(showImg);