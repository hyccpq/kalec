window.addEventListener("DOMContentLoaded",function () {
    let ajax = function* () {
        yield new Promise(function(resolve,reject) {
            let oAjax = new XMLHttpRequest();
            oAjax.open('GET','a.txt',true);
            oAjax.onreadystatechange = function () {
                if(oAjax.readyState == 4){

                    if(oAjax.status == 200){

                        resolve(eval('('+oAjax.responseText+')'));

                    }
                }
            };
            oAjax.send();
            // setTimeout(function () {
            //     resolve({code:0});
            // })
        })
    };

    let pull = function () {
        let genertaor = ajax();
        let step = genertaor.next();
        // console.warn(step.value);
        step.value.then(function (d) {
            if(d.code != 0){
                setTimeout(function () {
                    document.body.innerHTML += 'wait  '+d.code+'<br>';
                    console.info('wait',d);
                    pull();
                },1000);

            } else {
                document.body.innerHTML += d.code+'<br>';
                console.info(d);
            }
        })
    };

    pull();
});