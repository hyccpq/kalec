window.onload=function () {
    var numWorkers = 3;
    var workers = [];
    for(var i=0;i<numWorkers;i++){
        var worker = new Worker('worker.js');
        worker.onmessage = function (e) {
            var message = e.target+' Worker says '+e.data+'<br>';
            document.getElementById('output').innerHTML += message;
            // alert(message);
            // worker.postMessage('ping');
        }
        workers.push(worker);
    }
    for(var i=0;i<numWorkers;i++){
        worker.postMessage('ping');
    }
    // }

}